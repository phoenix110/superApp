import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {OrderProvider} from "../../providers/order";
import {PopProvider} from "../../providers/pop";
import {HttpProvider} from "../../providers/http";
declare let cordova;
/**
 * Generated class for the OrderConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment:"orderPay/:id"
})
@Component({
    selector: 'page-order-pay',
    templateUrl: 'order-pay.html',
})
export class OrderPayPage {
    public orderId: number = 0;
    public payWay = 3;
    public orderInfo: object = {};
    public password = 0;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public Order: OrderProvider,
                public Http:HttpProvider,
                public Pop:PopProvider) {
        this.orderId = this.navParams.get("id");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad OrderConfirmPage');
        this.orderTotal();
    }

    // 获取下单订单的详情信息
    public orderTotal() {
        this.Order.getOrderInfo(this.orderId).subscribe(res => {
            if (res === "toLogin") {
                this.navCtrl.push("LoginPage");
                return false;
            }
            this.orderInfo = res.data;
        });
    }
    // 支付宝、微信、余额付款
    public confirmPay() {
        let that = this;
        let params = {
            // id: this.orderInfo['id'],
            id: this.orderId,
            payMethod: this.payWay
        };
        // 支付宝支付
        if(params.payMethod == 3){
            that.Order.payMoney(params).subscribe(res => {
                if (res === "toLogin") {
                    this.navCtrl.push("LoginPage");
                    return false;
                }
                let alipayOrder = res.data;
                // let alipayOrder = "app_id=2015052600090779&biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%221%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%22%2C%22out_trade_no%22%3A%22IQJZSRC1YMQB5HU%22%7D&charset=utf-8&format=json&method=alipay.trade.app.pay&notify_url=http%3A%2F%2Fdomain.merchant.com%2Fpayment_notify&sign_type=RSA2&timestamp=2016-08-25%2020%3A26%3A31&version=1.0&sign=cYmuUnKi5QdBsoZEAbMXVMmRWjsuUj%2By48A2DvWAVVBuYkiBj13CFDHu2vZQvmOfkjE0YqCUQE04kqm9Xg3tIX8tPeIGIFtsIyp%2FM45w1ZsDOiduBbduGfRo1XRsvAyVAv2hCrBLLrDI5Vi7uZZ77Lo5J0PpUUWwyQGt0M4cj8g%3D";
                console.log(alipayOrder);
                cordova.plugins.alipay.payment(alipayOrder,function success(e){
                    that.navCtrl.push("OrderPage");
                },function error(e){
                    console.log(e)
                    that.Pop.toast(e.memo);
                });
            });
        }
        // 微信支付
        if(params.payMethod == 2){
            this.Order.payMoney(params).subscribe(res => {
                if (res === "toLogin") {
                    this.navCtrl.push("LoginPage");
                    return false;
                }

            });
        }
        // 余额支付
        if(params.payMethod == 1){
            this.Pop.openPinCode().subscribe( res => {
                if(res !== false){
                    this.password = res;
                    console.log(this.password);
                    this.Order.payMoney(params,this.password).subscribe(res => {
                        if (res === "toLogin") {
                            this.navCtrl.push("LoginPage");
                            return false;
                        }
                        this.Pop.toast(res.message);
                        this.navCtrl.push("OrderPage");
                    });
                }
            });

        }
    }
}

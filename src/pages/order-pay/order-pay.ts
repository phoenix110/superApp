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
            if (res !== false) {
                this.orderInfo = res.data;
            }
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
                if (res !== false) {
                    let alipayOrder = res.data;
                    cordova.plugins.alipay.payment(alipayOrder,function success(e){
                        that.navCtrl.push("OrderPage");
                    },function error(e){
                        that.Pop.toast(e.memo);
                    });
                }
            });
        }
        // 微信支付
        if(params.payMethod == 2){
            this.Order.payMoney(params).subscribe(res => {
                if (res !== false) {

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
                        if (res !== false) {
                            this.Pop.toast(res.message);
                            this.navCtrl.push("OrderPage");
                        }
                    });
                }
            });

        }
    }
}

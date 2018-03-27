import {Component} from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {GoodsProvider} from "../../providers/goods";
import {PopProvider} from "../../providers/pop";
import {OrderProvider} from "../../providers/order";
declare let cordova;

/**
 * Generated class for the OrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment: 'orderDetail/:goodSku:type'
})
@Component({
    selector: 'page-order-detail',
    templateUrl: 'order-detail.html',
})
export class OrderDetailPage {
    public orderInfo: Object = {};
    public sendWay: Array<string> = [];
    public totalPrice: number = 0;
    public goodParams: Object = {};
    public navType = "";
    public note:object = {
        text:''
    };
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http: HttpClient,
                public actionSheetCtrl: ActionSheetController,
                public Goods: GoodsProvider,
                public events: Events,
                public Pop: PopProvider,
                public Order:OrderProvider) {
        this.goodParams = this.navParams.get("goodSku");
        this.navType = this.navParams.get("type");
        console.log(this.navType)
    }

    ionViewDidLoad() {

    }

    ionViewDidEnter() {
        this.orderDetail();
    }

    // 初始化订单详情数据
    public orderDetail() {
        this.events.subscribe('addressCallback', (paramsVar) => {
            if (paramsVar != '') {
                this.goodParams['address_id'] = paramsVar;
                return false;
            } else {
                this.goodParams['address_id'] = '';
            }
            this.events.unsubscribe('addressCallback');
        });
        let params = this.goodParams;
        this.navType === 'cart' ? this.buy(params,'cart') : this.buy(params);

    }

    // 跳转至收货地址列表
    public toAddressList() {
        this.navCtrl.push("AddressListPage");
    }

    // 增加商品数量
    public upOrderNum() {
        let stockNum = parseInt(this.orderInfo['stock']);
        let orderNum = parseInt(this.orderInfo['num']) + 1;
        if (orderNum > stockNum) {
            return false;
        }
        this.orderInfo['num'] = orderNum;

    }

    // 减少商品数量
    public downOrderNum() {
        let orderNum = parseInt(this.orderInfo['num']);
        if (orderNum <= 1) {
            return false;
        }
        this.orderInfo['num'] = orderNum - 1;
    }

    // 确认下单
    public confirmPay() {
        let orderParams = {
            address_id:this.orderInfo['address']['id'],
            note:this.note['text']
        };
        Object.assign(orderParams,this.goodParams);
        this.navType === 'cart' ? this.xiadan(orderParams,'cart') : this.xiadan(orderParams);
    }

    // 确认下单请求
    public xiadan(orderParams,cart=''){
        this.Order.orderConfirm(orderParams,cart).subscribe(res => {
            if (res === "toLogin") {
                this.navCtrl.push("LoginPage");
                return false;
            }
            this.navCtrl.push("OrderPayPage",{id:res.data.pay_log_id});
        });
    }
    // 购买请求
    public buy(orderParams,cart=''){
        this.Goods.goodsBuy(orderParams,cart).subscribe(res => {
            if (res === "toLogin") {
                this.navCtrl.push("LoginPage");
                return false;
            }
            this.orderInfo = res.data;
        });
    }
}

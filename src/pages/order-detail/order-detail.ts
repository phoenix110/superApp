import {Component} from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {GoodsProvider} from "../../providers/goods";
import {PopProvider} from "../../providers/pop";

/**
 * Generated class for the OrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment: 'orderDetail/:goodSku'
})
@Component({
    selector: 'page-order-detail',
    templateUrl: 'order-detail.html',
})
export class OrderDetailPage {
    public orderInfo: Object = {};
    public sendWay: Array<string> = [];
    public totalPrice:number = 0;
    public goodParams:Object = {};
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public http: HttpClient,
        public actionSheetCtrl:ActionSheetController,
        public Goods:GoodsProvider,
        public events:Events,
        public Pop:PopProvider) {
        this.goodParams = this.navParams.get("goodSku");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad OrderDetailPage');

    }
    ionViewDidEnter(){
        this.orderDetail();
    }
    // 初始化订单详情数据
    public orderDetail (){
        this.events.subscribe('addressCallback', (paramsVar) => {
            if(paramsVar != ''){
                this.goodParams['address_id'] = paramsVar;
                return false;
            }else{
                this.goodParams['address_id'] = '';
            }
            this.events.unsubscribe('addressCallback');
        });
        let params = this.goodParams;
        this.Goods.goodsBuy(params).subscribe(res =>{
            if(res === "toLogin"){
                this.navCtrl.push("LoginPage");
                return false;
            }
            this.orderInfo = res.data;
        });
    }
    // 跳转至收货地址列表
    public toAddressList() {
        this.navCtrl.push("AddressListPage");
    }

    // // 获取订单详情数据
    // public orderDetail() {
    //     this.http.get("./assets/data.json").subscribe(data => {
    //         this.orderAddress = data["orderDetail"]['orderAddress'];
    //         this.orderInfo = data["orderDetail"]['orderInfo'];
    //         this.sendWay = data["orderDetail"]['sendWay'];
    //         console.log(this.sendWay)
    //     });
    // }
    // 增加商品数量
    public upOrderNum(){
        console.log(45454)
        let stockNum = parseInt(this.orderInfo['stock']);
        let orderNum = parseInt(this.orderInfo['num']) + 1;
        if(orderNum > stockNum){
            console.log("已打商品最大库存量");
            return false;
        }
        this.orderInfo['num'] = orderNum;

    }
    // 减少商品数量
    public downOrderNum(){
        let orderNum = parseInt(this.orderInfo['num']);
        if(orderNum <= 1){
            console.log("不能再少了哟！");
            return false;
        }
        this.orderInfo['num'] = orderNum - 1;
    }
    // 去支付（调起支付方式）
    public toPay(){
        let actionSheet = this.actionSheetCtrl.create({
            title: '选择支付方式',
            buttons: [
                {
                    text: '支付宝支付',
                    role: 'destructive',
                    handler: () => {
                        this.Pop.toast("尚未开通");
                    }
                }, {
                    text: '微信支付',
                    handler: () => {
                        this.Pop.toast("尚未开通");
                    }
                }, {
                    text: '我的钱包',
                    handler: () => {
                        this.Pop.toast("尚未开通");
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {

                    }
                }
            ]
        });
        actionSheet.present();
    }
}

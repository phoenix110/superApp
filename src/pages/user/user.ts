import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {Storage} from "@ionic/storage";
import {PopProvider} from "../../providers/pop";
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment: "user"
})
@Component({
    selector: 'page-user',
    templateUrl: 'user.html',
})
export class UserPage {

    //会员信息
    public member = {
        avatar:"",
        nickname:"未设置昵称",
        address:"",
        is_bind_bank:0,
        credit2:0.00
    };
    public code = 0;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public pop: PopProvider,
                private User: UserProvider,
                private storage: Storage,
                ) {


    }

    ionViewDidLoad() {
    }
    ionViewDidEnter(){
        this.userData();
    }
    // 获取会员信息
    public userData() {
        this.storage.get('token').then((token)=>{
            this.User.getUserInfo(token).subscribe(res=>{
                if(res.code == 0){
                    this.member = res.data;
                    return true;
                }
                this.pop.toast(res.message);
            });
        });
    }

    public userEdit(uid) {
        this.navCtrl.push("UserEditPage", {uid: uid});
    }

    // 跳转至零钱包页面
    public toWallet(uid) {
        this.navCtrl.push("WalletPage", {uid: uid});
    }
    // 跳转至余额支付密码
    public setPwd(uid) {
        this.navCtrl.push("PwdChangePage");
    }
    // 跳转至公告信息页面
    public toNotice() {
        this.navCtrl.push("NoticePage");
    }

    // 跳转至购物车页面
    public toCart(uid) {
        this.navCtrl.push("CartPage", {uid: uid});
    }

    // 跳转至订单页面
    public toOrder(uid) {
        this.navCtrl.push("OrderPage", {uid: uid});
    }
    // 跳转至公告信息页面
    public toOrderPay() {
        this.navCtrl.push("OrderPayPage");
    }

    //跳转到直播设置页
    public toLiveConfig(){
        this.navCtrl.push("LiveConfigPage");
    }


}

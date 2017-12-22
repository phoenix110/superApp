import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {Storage} from "@ionic/storage";
import {PopProvider} from "../../providers/pop";
import {AppProvider} from "../../providers/app";
import {AppConfig} from "../../app/app.config";

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
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public pop: PopProvider,
                private User: UserProvider,
                private storage: Storage,
                public app:AppProvider
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

    //退出登录
    logout(){
        this.storage.remove('token');
        this.pop.toast('退出成功');
        this.navCtrl.push("TabsPage");
    }


    //检查更新
    checkUpgrade(){
        this.app.getConfig().subscribe(res =>{
            if(res.code == '0'){
                //如果需要升级
                if(AppConfig.compareVersion(AppConfig.appVersion,res.data['base']['version'])){
                    if(AppConfig.platform == 'ios'){
                        window.location.href = res.data['base']['ios_download_url'];
                    }else{
                        //其他默认为android
                        window.location.href = res.data['base']['android_download_url'];

                    }
                }
                return true;
            }
            this.pop.toast(res.message);
        });
    }
}

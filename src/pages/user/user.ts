import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from "../../providers/user";
import { Storage } from "@ionic/storage";
import { PopProvider } from "../../providers/pop";

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment:"user/:uid"
})
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  public userInfo:Object = {};
  constructor(
      public navCtrl:NavController,
      public navParams: NavParams,
      public Pop:PopProvider,
      private User:UserProvider,
      private Storage:Storage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    this.userData();
  }
  // 获取会员信息
    public userData(){
    this.Storage.get("token").then((val) =>{
        this.User.getUserInfo(this.userInfo,val);
    });
    }
    public userEdit(uid){
      this.navCtrl.push("UserEditPage",{uid:uid});
    }
    // 跳转至零钱包页面
  public toWallet(uid){
      this.navCtrl.push("WalletPage",{uid:uid});
  }
    // 跳转至公告信息页面
    public toNotice(){
        this.navCtrl.push("NoticePage");
    }
    // 跳转至购物车页面
    public toCart(uid){
        this.navCtrl.push("CartPage",{uid:uid});
    }
    // 跳转至订单页面
    public toOrder(uid){
        this.navCtrl.push("OrderPage",{uid:uid});
    }
}

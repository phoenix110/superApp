import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
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
    public toCard(uid){
        this.navCtrl.push("CartPage",{uid:uid});
    }
    // 跳转至订单页面
    public toOrder(uid){
        this.navCtrl.push("OrderPage",{uid:uid});
    }
}

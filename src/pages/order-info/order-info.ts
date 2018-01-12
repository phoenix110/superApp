import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OrderProvider} from "../../providers/order";

/**
 * Generated class for the OrderInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-info',
  templateUrl: 'order-info.html',
})
export class OrderInfoPage {
  public orderId = 0;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public Order:OrderProvider) {
    this.orderId = this.navParams.get("id");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderInfoPage');
  }
  // 去付款
  public confirmPay(){
    this.navCtrl.push("OrderPayPage");
  }
  // 获取已下单订单的订单信息
  public orderInfo(){
    this.Order.orderInfo(this.orderId).subscribe( res => {
      if(res === 'toLogin'){
        this.navCtrl.push("LoginPage");
        return false;
      }
      this.navCtrl.push("OrderPayPage",{id:this.orderId});
    });
  }


}

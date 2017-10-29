import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the ShopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
    public shop:Array<object> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  ionViewDidLoad() {
    this.getShopData();
  }

	// 获取商城首页数据
    public getShopData(){
	    this.http.get("/assets/data.json").subscribe(data=>{
            this.shop = data['shop'];
        });
    }
}

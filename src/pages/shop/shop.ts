import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import {TabsProvider} from "../../providers/tabs";
import {PopProvider} from "../../providers/pop";

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
    public shopData:Array<object> = [];
  constructor(
      public navCtrl: NavController,
    public navParams: NavParams,
      public Tabs:TabsProvider,
      public Pop:PopProvider) {
  }

  ionViewDidLoad() {
    this.getShopData();
  }

	// 获取商城首页数据
    public getShopData(){
	    this.Tabs.getShopList().subscribe(res =>{
            if(res.code == 0){
                this.shopData = res.data;
                return false;
            }
            this.Pop.toast(res.message);
        })
    }
}

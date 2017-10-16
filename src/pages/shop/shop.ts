import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { App } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }
	getGoodDetail(id){
    console.log(id);
	  	this.navCtrl.push("GoodPage", {id:id});
	}
}

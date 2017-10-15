import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { GoodIntroComponent } from '../../components/good-intro/good-intro';
import { GoodPage } from '../good/good';
/**
 * Generated class for the ShopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

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
	  	this.navCtrl.push(GoodPage, {id:id});
	}
}

import { Component } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';

/**
 * Generated class for the GoodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-good',
  templateUrl: 'good.html',
})
export class GoodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodPage');
  }

}

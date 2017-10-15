import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GoodStyleComponent } from '../../components/good-detail/good-detail';
import { SelfHeadComponent } from '../../components/self-head/self-head';
/**
 * Generated class for the GoodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

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

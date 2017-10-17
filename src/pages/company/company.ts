import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the CompanyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    segment:'company/:id'
})
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class CompanyPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	console.log(this.navParams.data.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage');
  }
  close(){
  	this.navCtrl.pop();
  }

}

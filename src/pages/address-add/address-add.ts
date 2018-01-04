import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddressAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address-add',
  templateUrl: 'address-add.html',
})
export class AddressAddPage {
    public userInfo = {
        name:"",
        mobile:"",
        province:"",
        city:"",
        district:"",
        token:"",
        area:""
    };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressAddPage');
  }

}

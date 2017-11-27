import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the AddressListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address-list',
  templateUrl: 'address-list.html',
})
export class AddressListPage {
  public addressList:Array<Object> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressListPage');
    this.addressListData();
  }
  // 获取地址列表数据
  public addressListData(){
    this.http.get("./assets/data.json").subscribe(data=>{
      this.addressList = data['addressList'];
      console.log(data['addressList'])
    });
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import {GoodsProvider} from "../../providers/goods";
import {PopProvider} from "../../providers/pop";

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
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public http:HttpClient,
      public Goods:GoodsProvider,
      public Pop:PopProvider) {
  }

  ionViewDidLoad() {
  }
    ionViewDidEnter(){
        this.addressListData();
    }
  // 获取地址列表数据
  public addressListData(){
      this.Goods.addressList().subscribe(res =>{
          if(res !== false){
              this.Pop.toast(res.message);
              this.addressList = res.data;
          }

      });
  }
}

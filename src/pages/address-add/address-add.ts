import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user";

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
export class AddressAddPage{
    public userInfo = {
        name:"",
        mobile:"",
        province:"",
        city:"",
        district:"",
        token:"",
        area:"",
        type:"add"
    };
    public cityArr:Array<string> = [];
    public cityList = {
        area:[]
    };
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private User:UserProvider
  ) {
      console.log(this.userInfo)
  }

  ionViewDidLoad() {
      // 获取省市区城市列表数据
      this.User.cityListData(this.cityList);

  }

}

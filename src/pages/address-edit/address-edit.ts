import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user";

/**
 * Generated class for the AddressEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment:"addressEdit/:id"
})
@Component({
  selector: 'page-address-edit',
  templateUrl: 'address-edit.html',
})
export class AddressEditPage {
    public userInfo = {
        name:"",
        mobile:"",
        province:"",
        city:"",
        district:"",
        token:"",
        area:""
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
        console.log('ionViewDidLoad AddressAddPage');

    }

}

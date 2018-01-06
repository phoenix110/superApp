import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {GoodsProvider} from "../../providers/goods";
import {PopProvider} from "../../providers/pop";

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
        area:"",
        type:"edit"
    };
    public addressId = '';
    public cityArr:Array<string> = [];
    public cityList = {
        area:[]
    };
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private User:UserProvider,
        public Goods:GoodsProvider,
        public Pop:PopProvider
    ) {
        console.log(this.userInfo)
        this.addressId = this.navParams.get("id");
    }

    ionViewDidLoad() {
        // 获取省市区城市列表数据
        this.User.cityListData(this.cityList);
        console.log('ionViewDidLoad AddressAddPage');
        this.getAddressInfo();
    }
    // 获取地址详情
    public getAddressInfo(){
        this.Goods.getAddressInfo(this.addressId).subscribe(res =>{
            if(res === "toLogin"){
                this.navCtrl.push("LoginPage");
                return false;
            }
            this.Pop.toast(res.message);
            this.userInfo = res.data;
        });
    }

}

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the MyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  public my:Object = {
    "isLogin":{},
    "circle":[],
    "info":{}
  };
  public listNum = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
    this.myData();
  }
  // 个人中心数据
  public myData(){
    this.http.get("./assets/data.json").subscribe(data=>{
      this.my["isLogin"] = data["my"]["isLogin"];
      this.my["info"] = data["my"]["info"];
      this.my["circle"] = data["my"]["circle"];
      this.my["topNews"] = data["my"]["topNews"];
    });
  }
  // 切换分类列表
  public getCateList(index){
    this.listNum = index;
  }
}

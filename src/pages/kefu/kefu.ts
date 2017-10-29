import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KefuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kefu',
  templateUrl: 'kefu.html',
})
export class KeFuPage {
  public keFu:Array<object> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KefuPage');
    this.keFuData();
  }
  // 获取客服-用户评论数据
  public keFuData(){
    this.http.get("/assets/data.json").subscribe(data=>{
      this.keFu = data['keFu'];
    });
  }
  // 跳转至评论者详情
  public reviewerInfo(id){
    this.navCtrl.push("ReviewerInfoPage",{id:id});
  }
}

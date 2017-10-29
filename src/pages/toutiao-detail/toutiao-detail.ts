import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ToutiaoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment:"touTiaoDetail/:id"
})
@Component({
  selector: 'page-toutiao-detail',
  templateUrl: 'toutiao-detail.html',
})
export class ToutiaoDetailPage {
  public touDetail:Object = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  ionViewDidLoad() {
    this.touTiaoDetail();
  }
  // 获取头条新闻详情页数据
  public touTiaoDetail(){
    this.http.get("/assets/data.json").subscribe(data=>{
      this.touDetail = data['touTiaoDetail'];
    });
  }
}

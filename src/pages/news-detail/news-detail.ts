import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment:"newsDetail/:id"
})
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})
export class NewsDetailPage {
    public newsDetail:Array<object> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailPage');
    this.newsDetailData();
  }
  // 获取新闻详情页数据
  public newsDetailData(){
      this.http.get("/assets/data.json").subscribe(data=> {
          this.newsDetail = data['newsDetail'];
      })
  }
}

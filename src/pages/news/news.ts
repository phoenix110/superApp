import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  public news:Array<object> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
    this.newsData();
  }
  // 获取新闻页面数据
    public newsData(){
      this.http.get("/assets/data.json").subscribe(data=>{
          this.news = data['news'];
      });
    }
  //   跳转至新闻详情页
  public newsDetail(id){
    this.navCtrl.push("NewsDetailPage",{id:id});
  }
}

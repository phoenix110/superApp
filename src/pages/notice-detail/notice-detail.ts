import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the NoticeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment:"noticeDetail/:id"
})
@Component({
  selector: 'page-notice-detail',
  templateUrl: 'notice-detail.html',
})
export class NoticeDetailPage {
  public noticeDetail:Object = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticeDetailPage');
    this.noticeDetailData();
  }
    // 获取公告列表页数据
    public noticeDetailData(){
        this.http.get("./assets/data.json").subscribe(data=>{
            this.noticeDetail = data['noticeDetail'];
        });
    }
}

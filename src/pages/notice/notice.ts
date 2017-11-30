import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the NoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html',
})
export class NoticePage {
  public noticeInfo:Array<object> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticePage');
    this.noticeData();
  }
  // 跳转至公告详情页
  public noticeDetail(id){
    this.navCtrl.push("NoticeDetailPage",{id:id});
  }
  // 获取公告列表页数据
  public noticeData(){
    this.http.get("./assets/data.json").subscribe(data=>{
      this.noticeInfo = data['notice'];
      console.log(this.noticeInfo)
    });
  }
}

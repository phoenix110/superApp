import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {
  public productInfo:Array<object> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
    this.activityData();
  }
  // 获取活动产品详情数据
  public activityData(){
    this.http.get('/assets/data.json').subscribe(data=>{
      this.productInfo = data['activity'];
    });
  }
}

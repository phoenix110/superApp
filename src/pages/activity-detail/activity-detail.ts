import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActivityDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment:"activityDetail/:id"
})
@Component({
  selector: 'page-activity-detail',
  templateUrl: 'activity-detail.html',
})
export class ActivityDetailPage {
    public activityDetail:object = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityDetailPage');
    this.activityData();
  }
// 活动商品详情
    public activityData(){
        this.http.get("./assets/data.json").subscribe(data=>{
            this.activityDetail = data['activityDetail'];
        });
    }
}

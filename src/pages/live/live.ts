import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-live',
  templateUrl: 'live.html',
})
export class LivePage {
  public video:object = {
      "onLive":{},
      "outLive":[]
  };
  constructor(public navCtrl: NavController, public navParams: NavParams ,public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivePage');
    this.videoData();
  }
// 获取直播列表数据
    public videoData(){
        this.http.get("./assets/data.json").subscribe(data=>{
            this.video['onLive'] = data['video']['onLive'];
            this.video['outLive'] = data['video']['outLive'];
        })
    }
}

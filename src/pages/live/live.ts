import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {PopProvider} from "../../providers/pop";

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
  public lives = {};
  public page = 1;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams ,
      public http:HttpClient,
      public userService:UserProvider,
      public pop:PopProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivePage');
    this.videoData();
  }
// 获取直播列表数据
    public videoData(){
      this.userService.getLives(this.page).subscribe(res=>{
        this.pop.toast(res.message);
        if(res.code == 0){
            this.lives = res.data;
        }
      });
    }
}

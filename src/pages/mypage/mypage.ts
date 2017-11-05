import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MypagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mypage',
  templateUrl: 'mypage.html',
})
export class MypagePage {
  public comment:Object = {
      "info":{},
      "circle":[]
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MypagePage');
    this.myCommentData();
  }
  public myCommentData(){
    this.http.get("./assets/data.json").subscribe(data=>{
        this.comment["info"] = data["myComment"]["info"];
        this.comment["circle"] = data["myComment"]["circle"];
        console.log(data["myComment"])
    });
  }
}

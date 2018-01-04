import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the ChatDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment:"chatDetail/:id"
})
@Component({
  selector: 'page-chat-detail',
  templateUrl: 'chat-detail.html',
})
export class ChatDetailPage {
  public chatData:Array<object> = [];
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public Http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatDetailPage');
    this.getChatData();
  }
  public getChatData(){
    this.Http.get("./assets/data.json").subscribe(res => {
        console.log(res['chatInfo'])
      this.chatData = res['chatInfo'];
    });
  }
}

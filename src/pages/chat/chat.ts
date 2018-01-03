import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {NavController, App, IonicPage} from 'ionic-angular';
import { PopProvider } from "../../providers/pop";
/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  private isLogin:boolean = false;
  public chatList:object= {};
  public colorArr: string[] = [];
  constructor(
      public navCtrl: NavController,
      public app: App,
      public Pop: PopProvider,
      public http:HttpClient
) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this.chatListData();
  }
  // 获取聊天页数据
    public chatListData(){
        this.http.get("./assets/data.json").subscribe(data=>{
            this.chatList = data['chatData'];
            this.getColorArr();
        });
    }
    // 拉黑名单
    public delRecord(index){
        this.chatList['chat'].splice(index,1);
    }
    // 给颜色数组赋值
    public getColorArr() {
        for (let i in this.chatList['system']) {
            console.log(i);
            // 获取随机的颜色值
            let color = '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
            this.colorArr.push(color);
        }
    }

}

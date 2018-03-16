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
    this.chatListData();
  }
  // 获取聊天页数据
    public chatListData(){
        // this.chatList = {};
    }
    // 拉黑名单
    public delRecord(index){
        // this.chatList['chat'].splice(index,1);
    }
    // 给颜色数组赋值
    public getColorArr() {

    }
    // 跳转至系统公告
    public toNotice(){
        this.navCtrl.push("NoticePage");
    }

    // 跳转至系统公告
    public toAdvertise(){
        this.navCtrl.push("NoticePage");
    }
}

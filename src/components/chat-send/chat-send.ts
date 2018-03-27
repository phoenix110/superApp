import { Component, OnChanges } from '@angular/core';
import {TongxinProvider} from "../../providers/tongxin";

/**
 * Generated class for the ChatSendComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-send',
  templateUrl: 'chat-send.html'
})
export class ChatSendComponent implements OnChanges{
  public chatData:object = {
      id:2,
      avatar:"./assets/images/avatar/1.png",
        content:"",
      src:""
  };
  public showExtra:boolean = false;
  constructor(
      public TongXin:TongxinProvider
  ) {
    console.log('Hello ChatSendComponent Component');
  }
  // 显示图片、视频、红包等
  public addExtra(){
    this.showExtra = !this.showExtra;
  }
    // 初始化聊天数据
    ngOnChanges(){
        console.log(this.chatData);
        // this.sendChatData();
    }
    public sendChatData(){
        console.log(this.chatData)
        this.TongXin.chatInstant(this.chatData);
    }
}

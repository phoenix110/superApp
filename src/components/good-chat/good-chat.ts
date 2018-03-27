import { Component, Input, OnInit } from '@angular/core';
import {TongxinProvider} from "../../providers/tongxin";

/**
 * Generated class for the GoodChatComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'good-chat',
  templateUrl: 'good-chat.html'
})
export class GoodChatComponent implements OnInit{

  @Input() chatData:Array<object> = [];
  constructor(
      public TongXin:TongxinProvider
  ) {
    console.log('Hello GoodChatComponent Component');
  }
  // 初始化聊天数据
  ngOnInit(){
    console.log(this.chatData);
    this.getChatData();
  }
  public getChatData(){
    this.TongXin.obChat.subscribe(res => {
        console.log(res)
      this.chatData.push(res);
    });
  }
}

import { Component } from '@angular/core';

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
export class ChatSendComponent {
  public chat:object = {
    content:"",
      src:""
  };
  public showExtra:boolean = false;
  constructor() {
    console.log('Hello ChatSendComponent Component');
  }
  public sendChat(){
    console.log("消息已发送！");
  }
  // 显示图片、视频、红包等
  public addExtra(){
    this.showExtra = !this.showExtra;
  }
}

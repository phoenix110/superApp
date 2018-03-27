import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NavController} from "ionic-angular";

/**
 * Generated class for the SlideDeleteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'slide-delete',
  templateUrl: 'slide-delete.html'
})
export class SlideDeleteComponent {

  text: string;
  @Input() chatList:Array<object> = [];
  @Output() delChat = new EventEmitter();
  constructor(
      public navCtrl:NavController
  ) {
    console.log('Hello SlideDeleteComponent Component');
    this.text = 'Hello World';
  }
    // 拉黑名单
    public unread(index){
      this.delChat.emit(index);
    }
    // 跳转至聊天页
    public toChat(id){
        this.navCtrl.push("ChatDetailPage",{id:id});
    }
}

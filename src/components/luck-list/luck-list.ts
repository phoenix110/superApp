import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";

/**
 * Generated class for the LuckListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'luck-list',
  templateUrl: 'luck-list.html'
})
export class LuckListComponent {

  text: string;
@Input() luckList:Array<object> = [];
  constructor(
      public navCtrl:NavController
  ) {
    console.log('Hello LuckListComponent Component');
    this.text = 'Hello World';
  }
  public unread(i){
    this.luckList.slice(i,1);
  }
// 跳转至聊天详情页
    public toChat(id){
        this.navCtrl.push("ChatDetailPage",{id:id})
    }
}

import { Component, Input } from '@angular/core';
import {NavController, ToastController} from "ionic-angular";

/**
 * Generated class for the ContactComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'contact',
  templateUrl: 'contact.html'
})
export class ContactComponent {
  @Input() contact:Object = {};
  text: string;

  constructor(public navCtrl:NavController,public toastCtrl:ToastController) {
    console.log('Hello ContactComponent Component');
    this.text = 'Hello World';
  }
  // 弹出邮箱提示
  public showToast(){
      let toast = this.toastCtrl.create({
          message: '151356554@qq.com',
          duration: 2000,
          position: 'middle'
      });
      toast.present();
  }
  // 跳转至客服页面
  public talkCustomer(){
    this.navCtrl.push("KeFuPage");
  }

}

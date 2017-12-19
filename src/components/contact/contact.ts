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
  @Input() contact:Object = {
      id:0,
      title:'',
      tel:'',
      mobile:'',
      email:'',
      wechat:'',
      lat:0.00,
      lng:0.00,
      province:'',
      city:'',
      district:'',
      address:''
  };

  constructor(public navCtrl:NavController,public toastCtrl:ToastController) {

  }
  // 跳转至客服页面
  public talkCustomer(company_id){
    this.navCtrl.push("KeFuPage",{
        company_id:company_id
    });
  }

}

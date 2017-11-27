import { Component, Input } from '@angular/core';
import { NavController } from "ionic-angular";

/**
 * Generated class for the AddressItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'address-item',
  templateUrl: 'address-item.html'
})
export class AddressItemComponent {
  @Input() addressList:Array<object> = [];
  text: string;

  constructor(public navCtrl:NavController) {
    console.log('Hello AddressItemComponent Component');
    this.text = 'Hello World';
  }
  // 跳转至地址编辑页
  public editAddress(id){
    this.navCtrl.push("AddressEditPage",{id:id});
  }
}

import { Component , Input} from '@angular/core';
import {NavController} from "ionic-angular";

/**
 * Generated class for the BlankComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'blank',
  templateUrl: 'blank.html'
})
export class BlankComponent {

  text: string;
    @Input() type:string = "";
    @Input() tip:string = "";
    @Input() btnText:string = "";
  constructor(
      public navCtrl:NavController
  ) {
    console.log('Hello BlankComponent Component');
    this.text = 'Hello World';
  }
  // 跳转至商城
  public toShop(){
    this.navCtrl.push("ShopPage");
  }
}

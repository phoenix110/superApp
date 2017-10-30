import { Component, Input } from '@angular/core';
import { NavController,NavParams } from "ionic-angular";

/**
 * Generated class for the ProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product',
  templateUrl: 'product.html'
})
export class ProductComponent {
  @Input() product:Array<object> = [];
  text: string;

  constructor(public navCtrl:NavController,public navParams:NavParams) {
    this.text = 'Hello World';
  }
  // 跳转至活动介绍页
  public toDetail(id){
    this.navCtrl.push("ActivityDetailPage",{id:id});
  }
}

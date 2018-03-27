import { Component, Input } from '@angular/core';
import {NavController} from "ionic-angular";

/**
 * Generated class for the GoodIntroComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'good-intro',
  templateUrl: 'good-intro.html'
})
export class GoodIntroComponent {
  @Input() goodList:any;
  @Input() pagination:boolean = false;

  constructor(public navCtrl:NavController) {
    console.log('Hello GoodIntroComponent Component');
  }
  // 跳转至商品详情页
    getGoodDetail(id){
        this.navCtrl.push("GoodPage", {id:id});
    }
}

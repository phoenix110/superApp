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
  public goodArr:Array<object> = [];
  text: string;

  constructor(public navCtrl:NavController) {
    console.log('Hello GoodIntroComponent Component');
    this.text = 'Hello World';
    console.log(this.goodList);
      if(this.goodList instanceof Array){
          this.goodArr = this.goodList;
      }else{
          this.goodArr.push(this.goodList);
      }
      console.log(this.goodArr)
  }
  // 跳转至商品详情页
    getGoodDetail(id){
        this.navCtrl.push("GoodPage", {id:id});
    }
}

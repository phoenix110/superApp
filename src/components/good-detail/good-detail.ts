import {Component, Input, ViewChild} from '@angular/core';
import { Slides , NavController} from 'ionic-angular';
/**
 * Generated class for the GoodStyleComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'good-detail',
  templateUrl: 'good-detail.html'
})
export class GoodDetailComponent {
  @Input() goodInfo:Object = {};
  @ViewChild(Slides) slides: Slides;
  text: string;

  constructor(public navCtrl:NavController) {
    console.log('Hello GoodStyleComponent Component');
    this.text = 'Hello World';
  }
  // 跳转至产品（秀）图片详情页
  public goodPics(id){
      this.navCtrl.push("GoodImgsPage",{id:id});
  }
}

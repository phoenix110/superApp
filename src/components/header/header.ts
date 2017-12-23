import { Component ,Input} from '@angular/core';
import { NavController } from "ionic-angular";

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Input() headerTitle: string;
  @Input() save: string;
  @Input() addAddress: string;
  @Input() publish;

  constructor(public navCtrl:NavController) {
    console.log('Hello HeaderComponent Component');
  }
  // 跳转至新增收货地址页面
  public newAddress(){
    this.navCtrl.push("AddressAddPage");
  }
  // 保存当前页面信息
  public saveAddress(){
      this.navCtrl.pop();
  }

  //发表圈子
    pushArticle(){

    }
}

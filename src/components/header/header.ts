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

  constructor(public navCtrl:NavController) {
    console.log('Hello HeaderComponent Component');
  }
  // 跳转至新增收货地址页面
  public newAddress(){
    this.navCtrl.push("AddressEditPage");
  }
  // 保存当前页面信息
  public saveInfo(){
    console.log('保存当前页面信息');
      this.navCtrl.push("AddressListPage");
  }
}

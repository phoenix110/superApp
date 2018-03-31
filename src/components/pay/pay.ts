import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonProvider} from "../../providers/common";
import { NavController } from "ionic-angular";

/**
 * Generated class for the PayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pay',
  templateUrl: 'pay.html'
})
export class PayComponent {

  text: string;
  @Input() payStatus:boolean;
  @Input() rewardData:object;
  @Output() setStatus = new EventEmitter();
  constructor(
      public Common:CommonProvider,
      public navCtrl:NavController
  ) {
    console.log('Hello PayComponent Component');
    console.log(this.rewardData)
  }
  // 隐藏支付弹框
  public hidePay(){
    this.payStatus = false;
    // 向父级页面传递数据
    this.setStatus.emit(this.payStatus);
  }
  // 打赏支付
  public payReward(payWay){
      let id = this.rewardData['id'];
      let money = this.rewardData['money'];
      this.hidePay();
      this.Common.confirmPay(id,payWay,money).subscribe( res =>{
          if(res == "toLogin"){
              this.navCtrl.push("LoginPage");
              return false;
          }
      });
  }
}

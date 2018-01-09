import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderDetailPage } from './order-detail';
// 组件
import { ComponentsModule } from "../../components/components.module";
// 支付宝支付插件
import {Alipay, AlipayOrder} from '@ionic-native/alipay';
@NgModule({
  declarations: [
    OrderDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderDetailPage),
      ComponentsModule
  ],
    providers:[
        Alipay
    ]
})
export class OrderDetailModule {

}

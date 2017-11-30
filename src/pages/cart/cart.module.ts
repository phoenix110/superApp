import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartPage } from './cart';
// 公用组件模块
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    CartPage,
  ],
  imports: [
    IonicPageModule.forChild(CartPage),
      ComponentsModule
  ],
})
export class CartPageModule {}

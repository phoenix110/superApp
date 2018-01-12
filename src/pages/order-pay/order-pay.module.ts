import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderPayPage } from './order-pay';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    OrderPayPage,
  ],
  imports: [
      ComponentsModule,
    IonicPageModule.forChild(OrderPayPage),
  ],
})
export class OrderPayModule {}

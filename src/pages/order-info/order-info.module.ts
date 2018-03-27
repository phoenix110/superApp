import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderInfoPage } from './order-info';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    OrderInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderInfoPage),
      ComponentsModule
  ],
})
export class OrderInfoPageModule {}

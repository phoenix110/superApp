import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressListPage } from './address-list';
// 公共组件
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    AddressListPage,
  ],
  imports: [
    IonicPageModule.forChild(AddressListPage),
      ComponentsModule
  ],
})
export class AddressListPageModule {}

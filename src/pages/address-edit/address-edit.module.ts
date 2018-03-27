import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressEditPage } from './address-edit';
// 公共组件
import { ComponentsModule } from "../../components/components.module";
import { MultiPickerModule} from "ion-multi-picker";

@NgModule({
  declarations: [
    AddressEditPage,
  ],
  imports: [
    IonicPageModule.forChild(AddressEditPage),
      ComponentsModule,
      MultiPickerModule
  ],
})
export class AddressEditPageModule {}

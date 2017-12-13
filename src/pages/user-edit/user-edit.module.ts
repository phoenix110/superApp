import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserEditPage } from './user-edit';
// 公共组件模块
import { ComponentsModule } from "../../components/components.module";
// 注入自定义服务
import { NativeProvider } from "../../providers/native";
// 省市区联动服务
import { MultiPickerModule } from 'ion-multi-picker';

@NgModule({
  declarations: [
    UserEditPage,
  ],
  imports: [
    IonicPageModule.forChild(UserEditPage),
      ComponentsModule,
      MultiPickerModule
],
    providers:[
        NativeProvider
    ]
})
export class UserEditPageModule {}

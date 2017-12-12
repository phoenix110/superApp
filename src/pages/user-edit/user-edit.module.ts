import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserEditPage } from './user-edit';
// 公共组件模块
import { ComponentsModule } from "../../components/components.module";
// 注入自定义服务
import { NativeProvider } from "../../providers/native";

@NgModule({
  declarations: [
    UserEditPage,
  ],
  imports: [
    IonicPageModule.forChild(UserEditPage),
      ComponentsModule
  ],
    providers:[
        NativeProvider
    ]
})
export class UserEditPageModule {}

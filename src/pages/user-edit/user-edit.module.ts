import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserEditPage } from './user-edit';
// 公共组件模块
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    UserEditPage,
  ],
  imports: [
    IonicPageModule.forChild(UserEditPage),
      ComponentsModule
  ],
})
export class UserEditPageModule {}
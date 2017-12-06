import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoodImgsPage } from './good-imgs';
// 公共组件模块
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
      GoodImgsPage,
  ],
  imports: [
    IonicPageModule.forChild(GoodImgsPage),
      ComponentsModule
  ],
})
export class GoodImgsModule {}

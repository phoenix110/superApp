import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MypagePage } from './mypage';

import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    MypagePage,
  ],
  imports: [
    IonicPageModule.forChild(MypagePage),
      ComponentsModule
  ],
})
export class MypagePageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticePage } from './notice';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    NoticePage,
  ],
  imports: [
    IonicPageModule.forChild(NoticePage),
      ComponentsModule
  ],
})
export class NoticePageModule {}

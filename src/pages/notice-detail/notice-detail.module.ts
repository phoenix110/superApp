import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticeDetailPage } from './notice-detail';
 import { ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    NoticeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticeDetailPage),
      ComponentsModule
  ],
})
export class NoticeDetailPageModule {}

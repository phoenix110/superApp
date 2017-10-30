import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityDetailPage } from './activity-detail';

import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    ActivityDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivityDetailPage),
      ComponentsModule
  ],
})
export class ActivityDetailPageModule {}

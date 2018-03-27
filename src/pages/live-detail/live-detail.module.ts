import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiveDetailPage } from './live-detail';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    LiveDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LiveDetailPage),
    ComponentsModule
  ],
})
export class LiveDetailPageModule {}

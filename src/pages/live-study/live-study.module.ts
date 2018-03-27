import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiveStudyPage } from './live-study';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    LiveStudyPage,
  ],
  imports: [
    IonicPageModule.forChild(LiveStudyPage),
      ComponentsModule
  ],
})
export class LiveStudyPageModule {}

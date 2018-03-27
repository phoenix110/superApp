import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiveConfigPage } from './live-config';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    LiveConfigPage,
  ],
  imports: [
    IonicPageModule.forChild(LiveConfigPage),
      ComponentsModule
  ],
})
export class LiveConfigPageModule {}

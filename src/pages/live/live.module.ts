import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LivePage } from './live';

import { ComponentsModule} from "../../components/components.module";
@NgModule({
  declarations: [
    LivePage,
  ],
  imports: [
    IonicPageModule.forChild(LivePage),
      ComponentsModule
  ],
})
export class LivePageModule {}

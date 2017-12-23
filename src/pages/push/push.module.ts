import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushPage } from './push';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    PushPage,
  ],
  imports: [
    IonicPageModule.forChild(PushPage),
      ComponentsModule
  ],
})
export class PushPageModule {}

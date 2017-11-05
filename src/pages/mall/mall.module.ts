import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MallPage } from './mall';

import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    MallPage,
  ],
  imports: [
    IonicPageModule.forChild(MallPage),
      ComponentsModule
  ],
})
export class MallPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LuckPage } from './luck';

import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    LuckPage,
  ],
  imports: [
    IonicPageModule.forChild(LuckPage),
      ComponentsModule
  ],
})
export class LuckPageModule {}

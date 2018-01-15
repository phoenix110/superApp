import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetPage } from './set';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    SetPage,
  ],
  imports: [
      ComponentsModule,
    IonicPageModule.forChild(SetPage),
  ],
})
export class SetPageModule {}

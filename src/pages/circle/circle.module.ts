import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CirclePage } from './circle';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    CirclePage,
  ],
  imports: [
    IonicPageModule.forChild(CirclePage),
      ComponentsModule
  ],
})
export class CirclePageModule {}

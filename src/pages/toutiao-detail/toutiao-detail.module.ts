import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToutiaoDetailPage } from './toutiao-detail';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    ToutiaoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ToutiaoDetailPage),
      ComponentsModule
  ],
})
export class ToutiaoDetailPageModule {}

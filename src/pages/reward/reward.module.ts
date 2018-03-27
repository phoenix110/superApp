import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RewardPage } from './reward';
import { HeaderModule } from "../../components/header/header.module";
@NgModule({
  declarations: [
    RewardPage,
  ],
  imports: [
    IonicPageModule.forChild(RewardPage),
      HeaderModule
  ],
})
export class RewardPageModule {}

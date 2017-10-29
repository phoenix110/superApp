import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TouTiaoPage } from './toutiao';

@NgModule({
  declarations: [
      TouTiaoPage,
  ],
  imports: [
    IonicPageModule.forChild(TouTiaoPage),
  ],
})
export class TouTiaoPageModule {}

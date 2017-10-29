import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsDetailPage } from './news-detail';
// 导入Module模块
import { ComponentsModule } from "../../components/components.module";
@NgModule({
  declarations: [
    NewsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsDetailPage),
    ComponentsModule
  ],
})
export class NewsDetailPageModule {}

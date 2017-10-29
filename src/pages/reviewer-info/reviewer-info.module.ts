import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewerInfoPage } from './reviewer-info';
import { ComponentsModule } from "../../components/components.module";


@NgModule({
  declarations: [
    ReviewerInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewerInfoPage),
      ComponentsModule
  ],
})
export class ReviewerInfoPageModule {}

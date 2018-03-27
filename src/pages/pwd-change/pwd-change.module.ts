import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PwdChangePage } from './pwd-change';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
      PwdChangePage,
  ],
  imports: [
      ComponentsModule,
    IonicPageModule.forChild(PwdChangePage),
  ],
})
export class PwdChangeModule {}

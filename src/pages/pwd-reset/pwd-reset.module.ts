import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PwdResetPage } from './pwd-reset';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    PwdResetPage,
  ],
  imports: [
      ComponentsModule,
    IonicPageModule.forChild(PwdResetPage),
  ],
})
export class PwdResetPageModule {}

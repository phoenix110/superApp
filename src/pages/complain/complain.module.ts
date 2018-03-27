import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplainPage } from './complain';
import { HeaderModule } from "../../components/header/header.module"
@NgModule({
  declarations: [
    ComplainPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplainPage),
      HeaderModule
  ],
})
export class ComplainPageModule {}

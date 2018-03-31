import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RewardPage } from './reward';
import { HeaderModule } from "../../components/header/header.module";
import { PayModule} from "../../components/pay/pay.module";

@NgModule({
  declarations: [
    RewardPage,
  ],
  imports: [
    IonicPageModule.forChild(RewardPage),
      HeaderModule,
      PayModule
  ],
})
export class RewardPageModule {}

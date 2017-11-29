import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WalletPage } from './wallet';

// 公共组件模块
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    WalletPage,
  ],
  imports: [
    IonicPageModule.forChild(WalletPage),
    ComponentsModule
  ],
})
export class WalletPageModule {}

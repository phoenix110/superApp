import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopPage } from './shop';
import { CommonComponentModule } from "../../components/commonComponent.module";

@NgModule ({
    declarations: [
        ShopPage
    ],
    imports: [
        IonicPageModule.forChild(ShopPage),
        CommonComponentModule
    ],
    exports: [
        ShopPage
    ]
})

export class ShopPageModule {

}
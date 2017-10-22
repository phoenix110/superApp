import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopPage } from './shop';

// 组件Module
import { MyComponentModule } from "../../components/myComponent.module";

@NgModule ({
    declarations: [
        ShopPage
    ],
    imports: [
        IonicPageModule.forChild(ShopPage),
        MyComponentModule
    ],
    exports: [
        ShopPage
    ]
})

export class ShopPageModule {

}
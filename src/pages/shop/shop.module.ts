import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopPage } from './shop';

// 组件Module
import { ComponentsModule } from "../../components/components.module";

@NgModule ({
    declarations: [
        ShopPage
    ],
    imports: [
        IonicPageModule.forChild(ShopPage),
        ComponentsModule
    ],
    exports: [
        ShopPage
    ]
})

export class ShopPageModule {

}
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopPage } from './shop';
import { PipesModule } from "../../pipes/pipes.module";
// 组件Module
import { ComponentsModule } from "../../components/components.module";

@NgModule ({
    declarations: [
        ShopPage
    ],
    imports: [
        PipesModule,
        IonicPageModule.forChild(ShopPage),
        ComponentsModule
    ],
    exports: [
        ShopPage
    ]
})

export class ShopPageModule {

}
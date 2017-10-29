import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { UnionPage } from "./union";

import { ComponentsModule } from '../../components/components.module'

@NgModule ({
    declarations: [
        UnionPage
    ],
    imports: [
        IonicPageModule.forChild(UnionPage),
        ComponentsModule
    ],
    exports: [
        UnionPage
    ]
})

export class UnionPageModule {
    constructor (){
        
    }
}
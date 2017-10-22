import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { UnionPage } from "./union";

import { MyComponentModule } from '../../components/myComponent.module'

@NgModule ({
    declarations: [
        UnionPage
    ],
    imports: [
        IonicPageModule.forChild(UnionPage),
        MyComponentModule
    ],
    exports: [
        UnionPage
    ]
})

export class UnionPageModule {
    constructor (){
        
    }
}
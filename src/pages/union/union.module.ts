import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { UnionPage } from "./union";

@NgModule ({
    declarations: [
        UnionPage
    ],
    imports: [
        IonicPageModule.forChild(UnionPage),
    ],
    exports: [
        UnionPage
    ]
})

export class UnionPageModule {
    constructor (){
        
    }
}
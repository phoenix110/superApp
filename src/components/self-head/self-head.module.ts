import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { SelfHeadComponent } from "./self-head";

@NgModule ({
    declarations: [
        SelfHeadComponent
    ],
    imports: [
        IonicPageModule.forChild(SelfHeadComponent),
    ],
    exports: [
        SelfHeadComponent
    ]
})
export class SelfHeadModule {

}
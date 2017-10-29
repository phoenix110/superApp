import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { GoodIntroComponent } from "./good-intro";

@NgModule ({
    declarations: [
        GoodIntroComponent
    ],
    imports: [
        IonicPageModule.forChild(GoodIntroComponent),
    ],
    exports: [
        GoodIntroComponent
    ]
})
export class GoodIntroModule {

}
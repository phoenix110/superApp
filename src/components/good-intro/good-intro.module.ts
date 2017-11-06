import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { GoodIntroComponent } from "./good-intro";
import { PipesModule } from "../../pipes/pipes.module";

@NgModule ({
    declarations: [
        GoodIntroComponent
    ],
    imports: [
        IonicPageModule.forChild(GoodIntroComponent),
        PipesModule
    ],
    exports: [
        GoodIntroComponent
    ]
})
export class GoodIntroModule {

}
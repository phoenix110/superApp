import { NgModule, ErrorHandler } from "@angular/core";
import { IonicModule } from "ionic-angular";

import { GoodDetailComponent } from "./good-detail/good-detail";
import { GoodIntroComponent } from "./good-intro/good-intro";
import { SelfHeadComponent } from "./self-head/self-head";

@NgModule ({
    declarations: [
        GoodDetailComponent,
        GoodIntroComponent,
        SelfHeadComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        GoodDetailComponent,
        GoodIntroComponent,
        SelfHeadComponent
    ]
})
export class MyComponentModule {

}
import { NgModule, ErrorHandler } from "@angular/core";
import { IonicModule } from "ionic-angular";

import { GoodDetailModule } from "./good-detail/good-detail.module";
import { GoodIntroModule } from "./good-intro/good-intro.module";
import { SelfHeadModule } from "./self-head/self-head.module";

@NgModule ({
    declarations: [
    ],
    imports: [

    ],
    exports: [
        GoodDetailModule,
        GoodIntroModule,
        SelfHeadModule
    ]
})
export class CommonComponentModule {

}
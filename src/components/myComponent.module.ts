import { NgModule, ErrorHandler } from "@angular/core";
import { IonicModule } from "ionic-angular";

// 导入组件Module
import { GoodDetailModule } from "./good-detail/good-detail.module";
import { GoodIntroModule } from "./good-intro/good-intro.module";
import { SelfHeadModule } from "./self-head/self-head.module";
import { HeaderModule } from "./header/header.module";

@NgModule ({
    declarations: [
    ],
    imports: [

    ],
    exports: [
        GoodDetailModule,
        GoodIntroModule,
        SelfHeadModule,
        HeaderModule
    ]
})
export class MyComponentModule {

}
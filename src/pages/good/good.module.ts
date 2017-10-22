import { NgModule, ErrorHandler } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { GoodPage } from "./good";

// 导入公共Module
import {MyComponentModule} from "../../components/myComponent.module";

@NgModule ({
    declarations: [
        GoodPage
    ],
    imports: [
        IonicPageModule.forChild(GoodPage),
        MyComponentModule
    ],
    exports: [
        GoodPage
    ]
})
export class GoodModule {

}
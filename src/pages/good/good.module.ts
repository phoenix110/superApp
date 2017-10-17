import { NgModule, ErrorHandler } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { GoodPage } from "./good";
import {CommonComponentModule} from "../../components/commonComponent.module";

@NgModule ({
    declarations: [
        GoodPage
    ],
    imports: [
        IonicPageModule.forChild(GoodPage),
        CommonComponentModule
    ],
    exports: [
        GoodPage
    ]
})
export class GoodModule {

}
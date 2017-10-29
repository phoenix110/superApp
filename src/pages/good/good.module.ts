import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { GoodPage } from "./good";

// 导入公共Module
import {ComponentsModule} from "../../components/components.module";

@NgModule ({
    declarations: [
        GoodPage
    ],
    imports: [
        IonicPageModule.forChild(GoodPage),
        ComponentsModule
    ],
    exports: [
        GoodPage
    ]
})
export class GoodModule {

}
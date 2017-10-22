import { NgModule, ErrorHandler } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { FindPage } from "./find";

// 组件Module
import { MyComponentModule } from "../../components/myComponent.module";

@NgModule ({
    declarations: [
        FindPage
    ],
    imports: [
        IonicPageModule.forChild(FindPage),
        MyComponentModule
    ],
    exports: [
        FindPage
    ]
})
export class FindPageModule {

}
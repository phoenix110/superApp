import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { FindPage } from "./find";

// 组件Module
import { ComponentsModule } from "../../components/components.module";

@NgModule ({
    declarations: [
        FindPage
    ],
    imports: [
        IonicPageModule.forChild(FindPage),
        ComponentsModule
    ],
    exports: [
        FindPage
    ]
})
export class FindPageModule {

}
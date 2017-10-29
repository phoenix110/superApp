import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { MyPage } from "./my";

// 组件Module
import { ComponentsModule } from "../../components/components.module";
@NgModule ({
    declarations: [
        MyPage
    ],
    imports: [
        IonicPageModule.forChild(MyPage),
        ComponentsModule
    ],
    exports: [
        MyPage
    ]
})
export class MyPageModule {

}
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { MyPage } from "./my";

// 组件Module
import { MyComponentModule } from "../../components/myComponent.module";
@NgModule ({
    declarations: [
        MyPage
    ],
    imports: [
        IonicPageModule.forChild(MyPage),
        MyComponentModule
    ],
    exports: [
        MyPage
    ]
})
export class MyPageModule {

}
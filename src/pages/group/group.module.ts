import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { GroupPage } from "./group";

// 组件Module
import { MyComponentModule } from "../../components/myComponent.module";

@NgModule ({
    declarations: [
        GroupPage
    ],
    imports: [
        IonicPageModule.forChild(GroupPage),
        MyComponentModule
    ],
    exports: [
        GroupPage
    ]
})
export class GroupPageModule {

}
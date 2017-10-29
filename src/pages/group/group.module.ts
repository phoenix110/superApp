import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { GroupPage } from "./group";

// 组件Module
import { ComponentsModule } from "../../components/components.module";

@NgModule ({
    declarations: [
        GroupPage
    ],
    imports: [
        IonicPageModule.forChild(GroupPage),
        ComponentsModule
    ],
    exports: [
        GroupPage
    ]
})
export class GroupPageModule {

}
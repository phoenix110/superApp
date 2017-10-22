import { NgModule, ErrorHandler } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ChatPage } from "./chat";

// 组件Module
import { MyComponentModule } from "../../components/myComponent.module";

@NgModule ({
    declarations: [
        ChatPage
    ],
    imports: [
        IonicPageModule.forChild(ChatPage),
        MyComponentModule
    ],
    exports: [
        ChatPage
    ]
})
export class ChatPageModule {

}
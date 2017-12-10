import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ChatPage } from "./chat";

// 组件Module
import { ComponentsModule } from "../../components/components.module";
import { PopProvider } from "../../providers/pop";
@NgModule ({
    declarations: [
        ChatPage
    ],
    imports: [
        IonicPageModule.forChild(ChatPage),
        ComponentsModule
    ],
    exports: [
        ChatPage
    ],
    providers:[
        PopProvider
    ]
})
export class ChatPageModule {

}
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ChatPage } from "./chat";

// 组件Module
import { ComponentsModule } from "../../components/components.module";
// 服务
import { NativeServiceProvider } from "../../providers/NativeService";

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
        NativeServiceProvider
    ]
})
export class ChatPageModule {

}
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ChatSendComponent} from "./chat-send";

@NgModule ({
    declarations: [
        ChatSendComponent
    ],
    imports: [
        IonicPageModule.forChild(ChatSendComponent),
    ],
    exports: [
        ChatSendComponent
    ]
})
export class ChatSendModule {

}
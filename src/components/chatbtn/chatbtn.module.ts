import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ChatbtnComponent } from "./chatbtn";

@NgModule ({
    declarations: [
        ChatbtnComponent
    ],
    imports: [
        IonicPageModule.forChild(ChatbtnComponent),
    ],
    exports: [
        ChatbtnComponent
    ]
})
export class ChatbtnModule {

}
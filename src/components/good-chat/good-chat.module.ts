import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { GoodChatComponent } from "./good-chat";

@NgModule ({
    declarations: [
        GoodChatComponent
    ],
    imports: [
        IonicPageModule.forChild(GoodChatComponent)
    ],
    exports: [
        GoodChatComponent
    ]
})
export class GoodChatModule {

}
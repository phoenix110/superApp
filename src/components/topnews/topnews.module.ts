import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { TopnewsComponent } from "./topnews";

@NgModule ({
    declarations: [
        TopnewsComponent
    ],
    imports: [
        IonicPageModule.forChild(TopnewsComponent),
    ],
    exports: [
        TopnewsComponent
    ]
})
export class TopnewsModule {

}
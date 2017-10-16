import { NgModule, ErrorHandler } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { FindPage } from "./find";

@NgModule ({
    declarations: [
        FindPage
    ],
    imports: [
        IonicPageModule.forChild(FindPage),
    ],
    exports: [
        FindPage
    ]
})
export class FindPageModule {

}
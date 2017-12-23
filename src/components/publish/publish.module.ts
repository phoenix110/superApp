import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import {PublishComponent} from "./publish";

@NgModule ({
    declarations: [
        PublishComponent
    ],
    imports: [
        IonicPageModule.forChild(PublishComponent),
    ],
    exports: [
        PublishComponent
    ]
})
export class PublishModule {

}
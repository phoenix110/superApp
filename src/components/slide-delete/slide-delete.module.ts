import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { SlideDeleteComponent } from "./slide-delete";

@NgModule ({
    declarations: [
        SlideDeleteComponent
    ],
    imports: [
        IonicPageModule.forChild(SlideDeleteComponent),
    ],
    exports: [
        SlideDeleteComponent
    ]
})
export class SlideDeleteModule {

}
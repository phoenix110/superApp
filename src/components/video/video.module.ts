import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { VideoComponent } from "./video";

@NgModule ({
    declarations: [
        VideoComponent
    ],
    imports: [
        IonicPageModule.forChild(VideoComponent),
    ],
    exports: [
        VideoComponent
    ]
})
export class VideoModule {

}
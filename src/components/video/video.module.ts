import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { VideoComponent } from "./video";

import { PipesModule } from "../../pipes/pipes.module";

@NgModule ({
    declarations: [
        VideoComponent
    ],
    imports: [
        IonicPageModule.forChild(VideoComponent),
        PipesModule
    ],
    exports: [
        VideoComponent
    ]
})
export class VideoModule {

}
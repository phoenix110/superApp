import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ReviewComponent } from "./review";

import { PipesModule } from "../../pipes/pipes.module";

@NgModule ({
    declarations: [
        ReviewComponent
    ],
    imports: [
        IonicPageModule.forChild(ReviewComponent),
        PipesModule
    ],
    exports: [
        ReviewComponent
    ]
})
export class ReviewModule {

}
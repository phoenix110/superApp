import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ReviewerComponent } from "./reviewer";

import { PipesModule } from "../../pipes/pipes.module";

@NgModule ({
    declarations: [
        ReviewerComponent
    ],
    imports: [
        IonicPageModule.forChild(ReviewerComponent),
        PipesModule
    ],
    exports: [
        ReviewerComponent
    ]
})
export class ReviewerPageModule {

}
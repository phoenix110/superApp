import { NgModule, ErrorHandler } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { GoodDetailComponent } from "./good-detail";

@NgModule ({
    declarations: [
        GoodDetailComponent
    ],
    imports: [
        IonicPageModule.forChild(GoodDetailComponent),
    ],
    exports: [
        GoodDetailComponent
    ]
})
export class GoodDetailModule {

}
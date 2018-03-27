import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { GoodDetailComponent } from "./good-detail";
import { PipesModule } from "../../pipes/pipes.module";

@NgModule ({
    declarations: [
        GoodDetailComponent
    ],
    imports: [
        PipesModule,
        IonicPageModule.forChild(GoodDetailComponent),
    ],
    exports: [
        GoodDetailComponent
    ]
})
export class GoodDetailModule {

}
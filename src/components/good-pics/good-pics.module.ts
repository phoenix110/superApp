import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { GoodPicsComponent } from "./good-pics";

@NgModule ({
    declarations: [
        GoodPicsComponent
    ],
    imports: [
        IonicPageModule.forChild(GoodPicsComponent)
    ],
    exports: [
        GoodPicsComponent
    ]
})
export class GoodPicsModule {

}
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { BlankComponent} from "./blank";

@NgModule ({
    declarations: [
        BlankComponent
    ],
    imports: [
        IonicPageModule.forChild(BlankComponent),
    ],
    exports: [
        BlankComponent
    ]
})
export class BlankModule {

}
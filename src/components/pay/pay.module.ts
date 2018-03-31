import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { PayComponent } from "./pay";

@NgModule ({
    declarations: [
        PayComponent
    ],
    imports: [
        IonicPageModule.forChild(PayComponent),
    ],
    exports: [
        PayComponent
    ]
})
export class PayModule {

}
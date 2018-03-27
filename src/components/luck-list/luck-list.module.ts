import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { LuckListComponent } from "./luck-list";

@NgModule ({
    declarations: [
        LuckListComponent
    ],
    imports: [
        IonicPageModule.forChild(LuckListComponent),
    ],
    exports: [
        LuckListComponent
    ]
})
export class LuckListModule {

}
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ShareHeaderComponent } from "./share-header";

@NgModule ({
    declarations: [
        ShareHeaderComponent
    ],
    imports: [
        IonicPageModule.forChild(ShareHeaderComponent),
    ],
    exports: [
        ShareHeaderComponent
    ]
})
export class ShareHeaderModule {

}
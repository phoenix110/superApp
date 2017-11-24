import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { QrcodeComponent } from "./qrcode";

import { PipesModule } from "../../pipes/pipes.module";

@NgModule ({
    declarations: [
        QrcodeComponent
    ],
    imports: [
        IonicPageModule.forChild(QrcodeComponent),
        PipesModule
    ],
    exports: [
        QrcodeComponent
    ]
})
export class QrcodeModule {

}
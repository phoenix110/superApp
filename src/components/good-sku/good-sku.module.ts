import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { GoodSkuComponent } from "./good-sku";

@NgModule ({
    declarations: [
        GoodSkuComponent
    ],
    imports: [
        IonicPageModule.forChild(GoodSkuComponent)
    ],
    exports: [
        GoodSkuComponent
    ]
})
export class GoodSkuModule {

}
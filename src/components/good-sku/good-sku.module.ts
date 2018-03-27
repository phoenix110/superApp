import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { GoodSkuComponent } from "./good-sku";
import { PipesModule } from "../../pipes/pipes.module";

@NgModule ({
    declarations: [
        GoodSkuComponent
    ],
    imports: [
        PipesModule,
        IonicPageModule.forChild(GoodSkuComponent)
    ],
    exports: [
        GoodSkuComponent
    ]
})
export class GoodSkuModule {

}
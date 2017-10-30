import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ProductComponent } from "./product";

@NgModule ({
    declarations: [
        ProductComponent
    ],
    imports: [
        IonicPageModule.forChild(ProductComponent),
    ],
    exports: [
        ProductComponent
    ]
})
export class ProductModule {

}
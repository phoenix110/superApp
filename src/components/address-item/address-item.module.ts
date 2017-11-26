import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AddressItemComponent} from "./address-item";

@NgModule ({
    declarations: [
        AddressItemComponent
    ],
    imports: [
        IonicPageModule.forChild(AddressItemComponent),
    ],
    exports: [
        AddressItemComponent
    ]
})
export class AddressItemModule {

}
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { UseravatarComponent } from "./useravatar";

@NgModule ({
    declarations: [
        UseravatarComponent
    ],
    imports: [
        IonicPageModule.forChild(UseravatarComponent),
    ],
    exports: [
        UseravatarComponent
    ]
})
export class UseravatarModule {

}
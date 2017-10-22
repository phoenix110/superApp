import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import  { CompanyPage } from "./company";
// 公共组件Module
import {MyComponentModule} from "../../components/myComponent.module";

@NgModule ({
    declarations: [
        CompanyPage
    ],
    imports: [
        IonicPageModule.forChild(CompanyPage),
        MyComponentModule
    ],
    exports: [
        CompanyPage
    ]
})
export class CompanyPageModule {

}
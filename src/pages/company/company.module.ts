import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import  { CompanyPage } from "./company";
// 公共组件Module
import {ComponentsModule} from "../../components/components.module";

@NgModule ({
    declarations: [
        CompanyPage
    ],
    imports: [
        IonicPageModule.forChild(CompanyPage),
        ComponentsModule
    ],
    exports: [
        CompanyPage
    ]
})
export class CompanyPageModule {

}
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import  { CompanyPage } from "./company";
import {CommonComponentModule} from "../../components/commonComponent.module";

@NgModule ({
    declarations: [
        CompanyPage
    ],
    imports: [
        IonicPageModule.forChild(CompanyPage),
        CommonComponentModule
    ],
    exports: [
        CompanyPage
    ]
})
export class CompanyPageModule {

}
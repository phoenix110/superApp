import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { UnionPage } from "./union";
// 组件模块
import { ComponentsModule } from '../../components/components.module';
// 指令模块
import { DirectivesModule } from "../../directives/directives.module";

@NgModule ({
    declarations: [
        UnionPage
    ],
    imports: [
        IonicPageModule.forChild(UnionPage),
        ComponentsModule,
        DirectivesModule
    ],
    exports: [
        UnionPage
    ]
})

export class UnionPageModule {
    constructor (){
        
    }
}
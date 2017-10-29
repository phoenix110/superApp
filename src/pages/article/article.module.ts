import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ArticlePage } from "./article";

// 公共组件Module
import {ComponentsModule} from "../../components/components.module";

@NgModule ({
    declarations: [
        ArticlePage
    ],
    imports: [
        IonicPageModule.forChild(ArticlePage),
        ComponentsModule
    ],
    exports: [
        ArticlePage
    ]
})
export class ArticlePageModule {

}
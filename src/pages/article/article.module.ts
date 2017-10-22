import { NgModule, ErrorHandler } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ArticlePage } from "./article";

// 公共组件Module
import {MyComponentModule} from "../../components/myComponent.module";

@NgModule ({
    declarations: [
        ArticlePage
    ],
    imports: [
        IonicPageModule.forChild(ArticlePage),
        MyComponentModule
    ],
    exports: [
        ArticlePage
    ]
})
export class ArticlePageModule {

}
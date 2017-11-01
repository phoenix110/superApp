import { NgModule } from '@angular/core';
// 导入组件Module
import { GoodDetailModule } from "./good-detail/good-detail.module";
import { GoodIntroModule } from "./good-intro/good-intro.module";
import { HeaderModule } from "./header/header.module";
import { SelfHeadModule } from "./self-head/self-head.module";
import { ShareHeaderModule } from './share-header/share-header.module';
import { ReviewerModule } from './reviewer/reviewer.module';
import { ChatbtnModule } from './chatbtn/chatbtn.module';
import { ProductModule } from './product/product.module';
import { SlideDeleteModule } from './slide-delete/slide-delete.module';

@NgModule({
	declarations: [],
	imports: [
    ],
	exports: [
        GoodDetailModule,
        GoodIntroModule,
        SelfHeadModule,
        HeaderModule,
        ShareHeaderModule,
        ReviewerModule,
        ChatbtnModule,
        ProductModule,
        SlideDeleteModule
	]
})
export class ComponentsModule {
    constructor(){

    }
}

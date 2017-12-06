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
import { CommentModule } from './comment/comment.module';
import { UseravatarModule } from './useravatar/useravatar.module';
import { VideoModule } from './video/video.module';
import { ContactModule } from './contact/contact.module';
import { TopnewsModule } from './topnews/topnews.module';
import { QrcodeModule } from './qrcode/qrcode.module';
import { AddressItemModule } from './address-item/address-item.module';
import { GoodPicsModule } from './good-pics/good-pics.module';
import { GoodChatModule } from './good-chat/good-chat.module';

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
        SlideDeleteModule,
        CommentModule,
        UseravatarModule,
        VideoModule,
        ContactModule,
        TopnewsModule,
        QrcodeModule,
        AddressItemModule,
        GoodPicsModule,
        GoodChatModule
    ]
})
export class ComponentsModule {
    constructor(){

    }
}

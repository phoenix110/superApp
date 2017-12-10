import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ShareHeaderComponent } from "./share-header";

// 添加交互反馈服务模块
import { PopProvider} from "../../providers/pop";

@NgModule ({
    declarations: [
        ShareHeaderComponent
    ],
    imports: [
        IonicPageModule.forChild(ShareHeaderComponent),
    ],
    exports: [
        ShareHeaderComponent
    ],
    providers:[
        PopProvider
    ]
})
export class ShareHeaderModule {

}
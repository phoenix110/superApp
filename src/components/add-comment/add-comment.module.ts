import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AddCommentComponent} from "./add-comment";

@NgModule ({
    declarations: [
        AddCommentComponent
    ],
    imports: [
        IonicPageModule.forChild(AddCommentComponent),
    ],
    exports: [
        AddCommentComponent
    ]
})
export class AddCommentModule {

}
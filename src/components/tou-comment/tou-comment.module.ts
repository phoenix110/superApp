import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { TouCommentComponent } from "./tou-comment";
import { CommentModule } from "../comment/comment.module";

@NgModule ({
    declarations: [
        TouCommentComponent
    ],
    imports: [
        CommentModule,
        IonicPageModule.forChild(TouCommentComponent),
    ],
    exports: [
        TouCommentComponent
    ]
})
export class TouCommentModule {

}
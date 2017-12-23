import {Component} from '@angular/core';
import {ActionSheetController} from "ionic-angular";
import {TongxinProvider} from "../../providers/tongxin";
import {NativeProvider} from "../../providers/native";

/**
 * Generated class for the AddCommentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'add-comment',
    templateUrl: 'add-comment.html'
})
export class AddCommentComponent {
    private showStatus: boolean = false;
    private commentId: number = 0;
    public pictures: Array<string> = [];
    constructor(public TongXin: TongxinProvider,
                public native: NativeProvider,
                public actionSheetCtrl: ActionSheetController) {
        this.subComment();
    }

    // 订阅添加评论输入框显示状态
    public subComment() {
        this.TongXin.Status$.subscribe(res => {
            this.showStatus = res.showStatus;
            this.commentId = res.commentId;
        });
    }

    // 添加评论图片
    public addPicture() {
        let actionSheet = this.actionSheetCtrl.create({
            title: '请选择头像',
            buttons: [
                {
                    text: '相机',
                    role: 'destructive',
                    handler: () => {
                        this.native.getPictureByCamera().subscribe(imageBase64 => {
                            this.pictures.push(imageBase64);
                        })
                    }
                }, {
                    text: '图库',
                    handler: () => {
                        this.native.getPictureByPhotoLibrary().subscribe(imageBase64 => {
                            this.pictures.push(imageBase64);
                        })
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                        console.log('选择头像已取消');
                    }
                }
            ]
        });
        actionSheet.present();
    }
}

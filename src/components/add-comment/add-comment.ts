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
    private commentData: object = {};
    public pictures: Array<string> = [];
    constructor(public TongXin: TongxinProvider,
                public native: NativeProvider,
                public actionSheetCtrl: ActionSheetController) {
        this.subComment();
    }

    // 订阅添加评论输入框显示状态
    public subComment() {
        this.TongXin.Status$.subscribe(res => {
            console.log(res)
            this.showStatus = res.showStatus;
            this.commentData = res.commentData;
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
                            this.commentData['comment'][0]['pictures'].push(imageBase64);
                        })
                    }
                }, {
                    text: '图库',
                    handler: () => {
                        this.native.getMultiplePicture().subscribe(picsArr => {
                            let oldPics = this.commentData['comment'][0]['pictures'];
                            oldPics.push.apply(oldPics,picsArr);
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

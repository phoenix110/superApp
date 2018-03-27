import {NativeProvider} from "./native";
import {ActionSheetController} from "ionic-angular";
import {Injectable} from "@angular/core";


@Injectable()
export class CommonProvider{
    constructor(
        public native:NativeProvider,
        public actionSheetCtrl:ActionSheetController,
    ){

    }
    // 图片上传
    public uploadPicture() {
        let actionSheet = this.actionSheetCtrl.create({
            title: '请选择头像',
            buttons: [
                {
                    text: '相机',
                    role: 'destructive',
                    handler: () => {
                        this.native.getPictureByCamera().subscribe(picUrl => {
                            // this.commentData['comment'][0]['pictures'].push(picUrl);
                            return picUrl;
                        })
                    }
                }, {
                    text: '图库',
                    handler: () => {
                        this.native.getMultiplePicture().subscribe(picUrl => {
                            // let oldPics = this.commentData['comment'][0]['pictures'];
                            // oldPics.push.apply(oldPics,picUrl);
                            console.log(picUrl)
                            return picUrl;
                        })
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                        console.log('选择头像已取消');
                        return false;
                    }
                }
            ]
        });
        actionSheet.present();
    }
}
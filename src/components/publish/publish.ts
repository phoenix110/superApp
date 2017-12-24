import { Component } from '@angular/core';
import {PopProvider} from "../../providers/pop";
import { ActionSheetController } from 'ionic-angular';
import { NativeProvider } from "../../providers/native";

/**
 * Generated class for the PublishComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'publish',
  templateUrl: 'publish.html'
})
export class PublishComponent {

    public content; //存放发表的内容
    public images = []; //存放图片url
    public video = "";  //存放视频url
    public hasPic:boolean = false; //图片显示开关
    public hasVideo:boolean = false; //视频显示开关
    public hasAdd:boolean = true;
  constructor(
      public pop:PopProvider,
      private actionSheetCtrl:ActionSheetController,
      public native:NativeProvider,
  ) {

  }

  //上传文件
    public uploadPics(){
        let actionSheet = this.actionSheetCtrl.create({
            title: '请选择图片/视频',
            buttons: [
                {
                    text: '相机',
                    role: 'destructive',
                    handler: () => {
                        this.native.getPictureByCamera().subscribe(res => {
                            this.images.push.apply(res);
                        })
                    }
                },{
                    text: '图库',
                    handler: () => {
                        this.native.getMultiplePicture({destinationType:1}).subscribe(res => {
                            this.images.push.apply(res);
                        })
                    }
                },{
                    text: '取消',
                    role: 'cancel',
                    handler: () => {

                    }
                }
            ]
        });
        actionSheet.present();
    }
    //上传视频
    public uploadVideo(){
        let actionSheet = this.actionSheetCtrl.create({
            title: '请选择视频',
            buttons: [
                {
                    text: '视频',
                    role: 'destructive',
                    handler: () => {
                        this.native.getPictureByCamera({ mediaType:1}).subscribe(res => {
                            this.video = res;
                        })
                    }
                },{
                    text: '取消',
                    role: 'cancel',
                    handler: () => {

                    }
                }
            ]
        });
        actionSheet.present();
    }

}

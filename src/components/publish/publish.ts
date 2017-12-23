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
    public images = {
        src:[]
    }; //存放图片或者视频

  constructor(
      public pop:PopProvider,
      private actionSheetCtrl:ActionSheetController,
      public native:NativeProvider,
  ) {

  }

  //上传文件
    uploadFiles(){
        let actionSheet = this.actionSheetCtrl.create({
            title: '请选择图片/视频',
            buttons: [
                {
                    text: '相机',
                    role: 'destructive',
                    handler: () => {
                        this.native.getPictureByCamera().subscribe(res => {
                            this.images.src.push(res);
                        })
                    }
                },{
                    text: '图库',
                    handler: () => {
                        this.native.getMultiplePicture().subscribe(res => {
                            this.images.src = res;
                            console.log('aaa');
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

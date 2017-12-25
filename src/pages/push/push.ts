import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { NativeProvider } from "../../providers/native";
import {PopProvider} from "../../providers/pop";
import { HttpProvider } from "../../providers/http";
import {PublishProvider} from "../../providers/publish";

/**
 * Generated class for the PushPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-push',
  templateUrl: 'push.html',
})
export class PushPage {
    public pubData:object = {
        content:"",
<<<<<<< HEAD
        files:""
=======
        src:""
>>>>>>> f0620c32425bda72a389c8f90ea53dac3d8d2fc4
    };
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public Http:HttpProvider,
      public pop:PopProvider,
      private actionSheetCtrl:ActionSheetController,
      public native:NativeProvider,
      public publish:PublishProvider) {
  }

  ionViewDidLoad() {

  }
    //上传文件
    public uploadPics(){
        let actionSheet = this.actionSheetCtrl.create({
            title: '请选择图片',
            buttons: [
                {
                    text: '相机',
                    role: 'destructive',
                    handler: () => {
                        this.native.getPictureByCamera().subscribe(res => {
                            this.pubData['src'] = res;
                        })
                    }
                },{
                    text: '图库',
                    handler: () => {
                        this.native.getPictureByPhotoLibrary({}).subscribe(res => {
                            this.pubData['src'] = res;
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
                            this.pubData['src'] = res;
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
//发表圈子
    public  pushCircle(){
        this.publish.pubCircle(this.pubData).subscribe();
    }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { NativeProvider } from "../../providers/native";
import {PopProvider} from "../../providers/pop";
import { HttpProvider } from "../../providers/http";
import {PublishProvider} from "../../providers/publish";
import { ValidateProvider } from "../../providers/validate";

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
        src:""
    };
    public hasPic:boolean = false;
    public hasVideo:boolean = false;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public Http:HttpProvider,
      public pop:PopProvider,
      private actionSheetCtrl:ActionSheetController,
      public native:NativeProvider,
      public publish:PublishProvider,
      public validate:ValidateProvider) {
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
                            this.hasPic = true;
                            this.pubData['src'] = res;
                            console.log(res)

                        })
                    }
                },{
                    text: '图库',
                    handler: () => {
                        this.native.getPictureByPhotoLibrary({}).subscribe(res => {
                            this.hasPic = true;
                            this.pubData['src'] = res;
                            console.log(res)

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
                        let options = {
                            sourceType:0,
                            mediaType:1
                        };
                        this.native.getPictureByCamera(options).subscribe(res => {
                            this.hasVideo = true;
                            this.pubData['src'] = res;
                            console.log(res)
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
        this.Http.getToken().subscribe(res=>{
            let content = this.pubData['content'];
            if(!this.validate.trimBlank(content)){
                this.pop.toast("发布内容不能为空！")
                return false;
            }
            if(res === false){
                this.navCtrl.push("LoginPage");
                return false;
            }else{
                this.pubData['token'] = res;
                this.publish.pubCircle(this.pubData).subscribe(res=>{
                    this.pop.toast(res.msg);
                    if(res.code == 0){
                        this.navCtrl.pop();
                    }else if(res.code == -1){
                        this.pop.confirm().subscribe(res=>{
                            if(res === false){
                                this.navCtrl.push("LoginPage");
                            }
                        });
                    }else{
                        this.pop.toast(res.msg);
                    }
                });
            }
        });

    }
}

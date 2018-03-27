import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LiveStudyPage} from "../live-study/live-study";
import {ImagePicker} from "@ionic-native/image-picker";
import {NativeProvider} from "../../providers/native";
import {UserProvider} from "../../providers/user";
import {PopProvider} from "../../providers/pop";

/**
 * Generated class for the LiveConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-live-config',
  templateUrl: 'live-config.html',
})
export class LiveConfigPage {

  //直播参数
  public live = {
      'upload':'', //选择图片后的base64编码
      'thumb':'', //设置的缩略图
      'url':'',//直播填写的地址
      'status':0 //直播状态
  };

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public imagePicker:ImagePicker,
      public native:NativeProvider,
      public actionSheetCtrl:ActionSheetController,
      public userService:UserProvider,
      public pop:PopProvider
  ) {
      this.userService.getLiveConfig().subscribe(res => {
          if(res.code == 0){
              this.live['thumb'] = res.data['thumb'];
              this.live['url'] = res.data['url'];
              this.live['status'] = res.data['status'];
          }
      });
  }

  ionViewDidLoad() {

  }

  //跳转到设置教程
  public toLiveStudyPage(){
    this.navCtrl.push("LiveStudyPage");
  }

  //选择封面图
  public selectImage(){
      let actionSheet = this.actionSheetCtrl.create({
          title: '请选择头像',
          buttons: [
              {
                  text: '相机',
                  handler: () => {
                      this.native.getPictureByCamera().subscribe(imageBase64 => {
                          this.live.upload = imageBase64;
                      })
                  }
              },{
                  text: '图库',
                  handler: () => {
                      this.native.getPictureByPhotoLibrary().subscribe(imageBase64 => {
                          this.live.upload = imageBase64;
                      })
                  }
              },{
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

  //保存直播设置
    public saveLiveConfig(){
      this.live.status = this.live.status?1:0;
      this.userService.setLiveConfig(this.live).subscribe(res => {
          this.pop.toast(res.message);
      })
    }

}

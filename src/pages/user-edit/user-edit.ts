import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// 注入自定义服务
import { NativeProvider } from "../../providers/native";

/**
 * Generated class for the UserEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment:"userEdit/:uid"
})
@Component({
  selector: 'page-user-edit',
  templateUrl: 'user-edit.html',
})
export class UserEditPage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public native:NativeProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserEditPage');
  }
  // 保存会员资料
  public saveInfo(uid){
    this.navCtrl.pop();
  }
  public getAvatar(){
    this.native.getPictureByPhotoLibrary().subscribe(imageBase64 => {
        console.log(imageBase64);
    });
  }
}

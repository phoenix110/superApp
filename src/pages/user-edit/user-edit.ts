import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
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
  public avatar:string = "";
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public native:NativeProvider,
      private actionSheet:ActionSheet
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
      let buttonLabels = ['Share via Facebook', 'Share via Twitter'];

      const options: ActionSheetOptions = {
          title: 'What do you want with this image?',
          subtitle: 'Choose an action',
          buttonLabels: buttonLabels,
          addCancelButtonWithLabel: 'Cancel',
          addDestructiveButtonWithLabel: 'Delete',
          androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
          destructiveButtonLast: true
      };

      this.actionSheet.show(options).then((buttonIndex: number) => {
          console.log('Button pressed: ' + buttonIndex);
      });
    // this.native.getPictureByPhotoLibrary().subscribe(imageBase64 => {
    //     console.log(imageBase64);
    // });
  }
}

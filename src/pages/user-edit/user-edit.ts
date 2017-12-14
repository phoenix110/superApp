import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
// 注入自定义服务
import { NativeProvider } from "../../providers/native";
import { UserProvider} from "../../providers/user";

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
  public userInfo = {
      avatar:"./assets/images/icon.png",
      cityValue:"",
      sex:"man"
    };
  public cityList = {
      area:[]
  };
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public native:NativeProvider,
      private actionSheetCtrl:ActionSheetController,
      private User:UserProvider
  ) {
  }

  ionViewDidLoad() {
      // 获取省市区城市列表数据
      this.User.cityListData(this.cityList);
  }
  // 保存会员资料
  public saveInfo(uid){
    // this.navCtrl.pop();
      console.log(this.userInfo)
      console.log(this.cityList.area)

  }
  public getAvatar(){
      let actionSheet = this.actionSheetCtrl.create({
          title: '请选择头像',
          buttons: [
              {
                  text: '相机',
                  role: 'destructive',
                  handler: () => {
                      this.native.getPictureByCamera().subscribe(imageBase64 => {
                          this.userInfo.avatar = imageBase64;
                      })
                  }
              },{
                  text: '图库',
                  handler: () => {
                      this.native.getPictureByPhotoLibrary().subscribe(imageBase64 => {
                          this.userInfo.avatar = imageBase64;
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
}

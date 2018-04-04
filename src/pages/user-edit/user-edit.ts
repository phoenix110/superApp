import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
// 注入自定义服务
import { NativeProvider } from "../../providers/native";
import { UserProvider} from "../../providers/user";
import {PopProvider} from "../../providers/pop";
import { ValidateProvider } from "../../providers/validate";
import { HttpProvider } from "../../providers/http";

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
      avatar:"assets/images/face.png",
      province:"",
      city:"",
      district:"",
      gender:"1",
      token:"",
      age:0
    };
  public cityArr:Array<string> = [];
  public cityList = {
      area:[]
  };
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public native:NativeProvider,
      private actionSheetCtrl:ActionSheetController,
      private User:UserProvider,
      private Pop:PopProvider,
      private Validate:ValidateProvider,
      private Http:HttpProvider
  ) {
  }

  ionViewDidLoad() {
      // 获取省市区城市列表数据
      this.User.cityListData(this.cityList);
      this.userData();
      console.log(this.userInfo)
  }
    // 获取会员信息
    public userData() {
        this.Http.getToken().subscribe(res=>{
            if(res == false){
                this.navCtrl.push("LoginPage");
            }else{
                this.User.getUserInfo(res).subscribe(res=>{
                    if(res.code == 0){
                        res.data.gender = 1;
                        this.userInfo = res.data;
                        console.log(this.userInfo)
                    }else{
                        this.Pop.toast(res.message);
                    }
                });
            }
        });
    }
  // 保存会员资料
  public saveInfo(){
      let cityArr = document.getElementById("cities").innerText;
      cityArr = this.Validate.trimBlank(cityArr);
      if(cityArr == '省-市-区(县)'){
          this.Pop.toast("请选择所在地区");
          return false;
      }
      this.cityArr = cityArr.split("-");
      this.userInfo.province  = this.cityArr[0];
      this.userInfo.city  = this.cityArr[1];
      this.userInfo.district  = this.cityArr[2];
      this.Http.getToken().subscribe(res=>{
          if(res == false){
              this.navCtrl.push("LoginPage");
          }else{
              this.userInfo.token = res;
              this.User.updateUserInfo(this.userInfo).subscribe(res=>{
                  if(res.code == 0){
                      this.navCtrl.pop();
                  }else{
                      this.Pop.toast(res.message);
                  }
              });
          }
      });


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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http";
import { AlertProvider} from "../../providers/alert";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private mobile:number;
  private password:string;
  private confirmPassword:string;
  private qrCode:number;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public AlertProvider:AlertProvider,
      public HttpProvider:HttpProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.HttpProvider.post({op:"login"}).subscribe(res=>{
        console.log(res)
    });
  }
    // 退出注册
    public popOut(){
        this.navCtrl.pop();
    }
    // 去登录
    public toLogin(){
        this.navCtrl.push("LoginPage");
    }
    public register(){
        this.AlertProvider.toast("失败");
    }
}

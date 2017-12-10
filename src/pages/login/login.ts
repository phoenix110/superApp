import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider} from "../../providers/http";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  mobile;
  password;
  constructor(public navCtrl: NavController, public navParams: NavParams, public HttpProvider:HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


    public toRegister(){
        this.navCtrl.push("RegisterPage");
    }
    // 退出注册
    public popOut(){
        this.navCtrl.pop();
    }
    // 忘记密码
    public forgetPwd(){
        this.navCtrl.push("ForgetPage");
    }
}

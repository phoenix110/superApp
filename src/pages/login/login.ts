import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PopProvider} from "../../providers/pop";
import {UserProvider} from "../../providers/user";
import {ValidateProvider} from "../../providers/validate";
import { Storage } from "@ionic/storage";
import {AppConfig} from "../../app/app.config";

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

    public userInfo = {
        mobile: "",
        password: ""
    };

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public Pop: PopProvider,
        public User: UserProvider,
        public Valify: ValidateProvider,
        public Storage:Storage) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    // 会员登录
    public login() {
        let mobile = this.userInfo.mobile;
        let password = this.userInfo.password;
        if (mobile == '') {
            this.Pop.toast("手机号不能为空");
            return false;
        }
        if (!this.Valify.phone(mobile)) {
            this.Pop.toast("手机号格式不正确");
            return false;
        }
        if (password == '') {
            this.Pop.toast("密码不能为空");
            return false;
        }
        if (password.length != 6) {
            this.Pop.toast("密码格式不正确");
            return false;
        }
        this.User.login(this.userInfo).subscribe(res => {
            this.Pop.toast(res.message);
            if (res.code == '0') {
                this.Storage.set("token",res['data']['token']);
                AppConfig.loginStatus = true;
                this.navCtrl.push("TabsPage");
            }
        });
    }
    // 跳转至注册页面
    public toRegister() {
        this.navCtrl.push("RegisterPage");
    }

    // 退出登录页面
    public popOut() {
        this.navCtrl.pop();
    }

    // 跳转至忘记密码
    public forgetPwd() {
        this.navCtrl.push("ForgetPage");
    }
}

import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PopProvider} from "../../providers/pop";
import {UserProvider} from "../../providers/user";
import {ValidateProvider} from "../../providers/validate";

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
        public Valify: ValidateProvider) {
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
            if (res.type == "success") {
                this.Pop.toast("登录成功！");
                this.navCtrl.push("TabsPage");
            } else {
                this.Pop.alert(res.message);
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

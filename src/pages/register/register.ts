import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular'
import {UserProvider} from "../../providers/user";
import {PopProvider} from "../../providers/pop";
import { ValidateProvider} from "../../providers/validate";

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
    public userInfo = {
        mobile: "",
        password: "",
        repassword: "",
        code: ""
    };
    public codeText = "获取验证码";
    public codeStatus = false;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public Pop: PopProvider,
        public User: UserProvider,
        public Validate:ValidateProvider
    ) {
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');

    }

    // 退出注册
    public popOut() {
        this.navCtrl.pop();
    }

    // 去登录
    public toLogin() {
        this.navCtrl.push("LoginPage");
    }

    // 新用户注册
    public register() {
        console.log(this.User.validate(this.userInfo))
        if(!this.User.validate(this.userInfo)){
            return false;
        }
        this.User.register(this.userInfo).subscribe(res => {
            if (res.type == 'success') {
                this.Pop.toast("恭喜您注册成功！");
                this.navCtrl.push("TabsPage");
            } else {
                this.Pop.toast(res.message);
            }
        });
    }

    // 获取短信验证码
    public getCode() {
        let that = this;
        that.User.getCode(that);
    }
}

import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {PopProvider} from "../../providers/pop";

/**
 * Generated class for the ForgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-forget',
    templateUrl: 'forget.html',
})
export class ForgetPage {
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
        public User: UserProvider,
        public Pop:PopProvider
    ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ForgetPage');
    }

    public popOut() {
        this.navCtrl.pop();
    }

    // 忘记密码 - 重新设置新密码
    public register() {
        if(!this.User.validate(this.userInfo)){
            return false;
        }
        this.User.register(this.userInfo).subscribe(res => {
            if (res.type == 'success') {
                this.Pop.toast(res.message);
                this.navCtrl.pop();
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

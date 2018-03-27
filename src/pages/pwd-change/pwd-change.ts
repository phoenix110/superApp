import {Component, ChangeDetectorRef} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {ValidateProvider} from "../../providers/validate";
import {PopProvider} from "../../providers/pop";

/**
 * Generated class for the PayPwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment: "pwdChange/:uid"
})
@Component({
    selector: 'page-pwd-change',
    templateUrl: 'pwd-change.html',
})
export class PwdChangePage {
    public uid: number = 0;
    public pwdInfo: object = {
        uid: this.uid,
        oldPwd: "",
        newPwd: "",
        reNewPwd: "",
        code: ""
    };
    public codeText = "获取验证码";
    public codeStatus = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public Valify: ValidateProvider,
                public Pop: PopProvider,
                public changeDetectorRef: ChangeDetectorRef,
                public User: UserProvider) {
        this.uid = this.navParams.get("uid");
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad PayPwdPage');
    }

    // 获取验证码
    public getSms() {
        this.User.getPayCode(this.pwdInfo).subscribe(res => {
            if (res === "toLogin") {
                this.navCtrl.push("LoginPage");
                return false;
            }
            this.Pop.toast(res.message);
            this.User.downTime(this);
        });
    }

    // 保存修改
    public savePwd() {
        this.User.changePayCode(this.pwdInfo).subscribe(res => {
            if (res === "toLogin") {
                this.navCtrl.push("LoginPage");
                return false;
            }
            this.Pop.toast(res.message);
            this.navCtrl.pop();
        });
    }
}

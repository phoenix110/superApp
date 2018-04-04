import {ChangeDetectorRef, Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ValidateProvider} from "../../providers/validate";
import {PopProvider} from "../../providers/pop";
import {UserProvider} from "../../providers/user";

/**
 * Generated class for the PwdResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment:"pwdReset/:uid"
})
@Component({
  selector: 'page-pwd-reset',
  templateUrl: 'pwd-reset.html',
})
export class PwdResetPage {
    public uid:number = 0;
    public pwdInfo:object = {
        uid:this.uid,
        newPwd:"",
        reNewPwd:"",
        code:""
    };
    public codeText = "获取验证码";
    public codeStatus = false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public Valify:ValidateProvider,
              public Pop:PopProvider,
              public changeDetectorRef:ChangeDetectorRef,
              public User:UserProvider) {
      this.uid = this.navParams.get("uid");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PwdResetPage');
  }
// 获取验证码
    public getSms(){
        this.User.getPayCode(this.pwdInfo).subscribe( res => {
            if(res !== false){
                this.Pop.toast(res.message);
                this.User.downTime(this);
            }
        });
    }
    // 保存修改
    public savePwd(){
        this.User.resetPayPwd(this.pwdInfo).subscribe( res => {
            if(res !== false){
                this.Pop.toast(res.message);
                this.navCtrl.pop();
            }
        });
    }
}

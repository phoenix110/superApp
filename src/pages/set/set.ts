import {Component} from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {AppProvider} from "../../providers/app";
import {AppConfig} from "../../app/app.config";
import {PopProvider} from "../../providers/pop";

/**
 * Generated class for the SetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment:"set/:uid"
})
@Component({
    selector: 'page-set',
    templateUrl: 'set.html',
})
export class SetPage {
    public uid = 0;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public pop: PopProvider,
                private storage: Storage,
                public events:Events,
                public app:AppProvider,) {
        this.uid = this.navParams.get("uid");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SetPage');
    }

    // 添加支付密码
    public addPwd() {
        this.navCtrl.push("PwdAddPage",{uid:this.uid});
    }

    // 修改支付密码
    public changePwd() {
        this.navCtrl.push("PwdChangePage",{uid:this.uid});
    }

    // 重置支付密码
    public resetPwd() {
        this.navCtrl.push("PwdResetPage",{uid:this.uid});
    }
    //退出登录
    logout(){
        this.storage.remove('token');
        this.pop.toast('退出成功');
        this.navCtrl.push("TabsPage");
        this.events.publish("loginStatus",false);
    }

    //检查更新
    checkUpgrade(){
        this.app.getConfig().subscribe(res =>{
            if(res.code == '0'){
                //如果需要升级
                if(AppConfig.compareVersion(AppConfig.appVersion,res.data['base']['version'])){
                    if(AppConfig.platform == 'ios'){
                        window.location.href = res.data['base']['ios_download_url'];
                    }else{
                        //其他默认为android
                        window.location.href = res.data['base']['android_download_url'];
                    }
                    return false;
                }
                this.pop.toast('已经是最新版本');
                return true;
            }
            this.pop.toast(res.message);
        });
    }
}

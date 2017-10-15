import { Component } from '@angular/core';
import { NavController, AlertController , App } from 'ionic-angular';
import { GoodPage } from '../good/good';
/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  private isLogin:boolean = false;
  constructor(public navCtrl: NavController, public app: App, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    if(!this.isLogin){
        this.showConfirm();
    }
  }
  showConfirm() {
      let confirm = this.alertCtrl.create({
          title: '',
          message: '您还没登录，是否现在登录?',
          buttons: [
              {
                  text: '取消',
                  handler: () => {
                      console.log('Disagree clicked');
                  }
              },
              {
                  text: '确定',
                  handler: () => {
                      console.log('Agree clicked');
                      // this.app.getRootNav().setRoot(GoodPage);
                  }
              }
          ]
      });
      confirm.present();
  }
}

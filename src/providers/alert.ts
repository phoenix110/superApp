import { Injectable } from '@angular/core';
import { AlertController } from "ionic-angular";
import { Observable} from "rxjs/Observable";

/*
  Generated class for the AlternationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {

  constructor(public alertCtrl:AlertController) {
    console.log('Hello NativeServiceProvider Provider');
  }
  // 未登录确认登录提示框
    loginConfirm(options):Observable<Object> {
      return Observable.create( observable=>{
          let confirm = this.alertCtrl.create({
              title: options.title || '',
              message: options.message || '您还没登录，<br>是否现在登录?',
              buttons: [
                  {
                      text: options.text || '取消',
                      handler: () => {
                          observable.next( {is_login: false} );
                      }
                  },
                  {
                      text: '确定',
                      handler: () => {
                          observable.next( {is_login: true} );
                      }
                  }
              ]
          });
          confirm.present();
      });
    }
}

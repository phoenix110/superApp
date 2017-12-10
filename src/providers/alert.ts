import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController} from "ionic-angular";
import { Observable} from "rxjs/Observable";
import {observable} from "rxjs/symbol/observable";

/*
  Generated class for the AlternationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {
    private load;
  constructor(
      public alertCtrl:AlertController,
      public loadCtrl:LoadingController,
      public toastCtrl:ToastController
  ) {
    console.log('Hello NativeServiceProvider Provider');
  }
  // 弹出提示框
    alert(title: string, subTitle: string = "",): void {
        this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: [{text: '确定'}]
        }).present();
    }
  // 未登录确认登录提示框
    confirm(options):Observable<Object> {
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
    // 显示loading
    showLoading(content:string = "加载中...",showBackdrop:boolean = true):void{
      this.load = this.loadCtrl.create({
          spinner: 'bubbles',
          showBackdrop:showBackdrop,
          content: content
      });
      this.load.present();
    }
    // 关闭loading
    hideLoading():void{
        if(this.load){
            this.load.dismiss();
        }
    }
    // 提示信息
    toast(message:string = "",position:string = "middle") {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: position,     //"top", "middle", "bottom".
            cssClass: '',
            showCloseButton: false,
            closeButtonText: "关闭",
            dismissOnPageChange: false,     //当页面变化时是否dismiss
        });
        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });
        toast.present();
    }

}

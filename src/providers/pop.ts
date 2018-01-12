import {Injectable} from '@angular/core';
import {AlertController, LoadingController, ToastController} from "ionic-angular";
import {Observable} from "rxjs/Observable";
import {PincodeController} from "ionic2-pincode-input";

/*
  Generated class for the AlternationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PopProvider {
    private load;

    constructor(public alertCtrl: AlertController,
                public loadCtrl: LoadingController,
                public toastCtrl: ToastController,
                public pincodeCtrl: PincodeController) {
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
    confirm(title: string = "", message: string = "您还没登录，<br>是否现在登录?", btnText1: string = "取消", btnText2: string = "确定"): Observable<Object> {
        return Observable.create(observable => {
            let confirm = this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [
                    {
                        text: btnText1,
                        handler: () => {
                            observable.next({is_login: false});
                        }
                    },
                    {
                        text: btnText2,
                        handler: () => {
                            observable.next({is_login: true});
                        }
                    }
                ]
            });
            confirm.present();
        });
    }

    // 显示loading
    showLoading(content: string = "加载中...", showBackdrop: boolean = true): void {
        this.load = this.loadCtrl.create({
            spinner: 'bubbles',
            showBackdrop: showBackdrop,
            content: content
        });
        this.load.present();
    }

    // 关闭loading
    hideLoading(): void {
        if (this.load) {
            this.load.dismiss();
        }
    }

    // 提示信息
    toast(message: string = "", position: string = "bottom") {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 1500,
            position: position,     //"top", "middle", "bottom".
            cssClass: 'pop-box',
            showCloseButton: false,
            closeButtonText: "关闭",
            dismissOnPageChange: false,     //当页面变化时是否dismiss
        });
        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });
        toast.present();
    }

    // 自定义虚拟密码输入框
    public openPinCode(): Observable<any> {
        return Observable.create(observable => {
            let pinCode = this.pincodeCtrl.create({
                title: '支付密码',
                forgotPasswordText: "取消",
                hideCancelButton: true,
            });
            pinCode.present();
            return pinCode.onDidDismiss((code, status) => {
                if (status === 'done') {
                    // 输入完成
                    observable.next(code);
                }else if (status === 'forgot'){
                    observable.next(false);
                }
            })
        })
    }
}

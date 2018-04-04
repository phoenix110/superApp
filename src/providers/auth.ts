import {Injectable, ViewChild} from '@angular/core';
import 'rxjs/add/operator/map';
import {Nav,ModalController} from 'ionic-angular';
import {PopProvider} from "./pop";
import {Observable} from "rxjs/Observable";
import {HttpProvider} from "./http";
//这引入

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
    @ViewChild(Nav) nav: Nav;
    public token;//登录记录的token值
    constructor(
        public pop: PopProvider,
        public http: HttpProvider,
        public modalCtrl:ModalController) {

    }

    // 验证是否登录以及登录过期重新登录
    public authLogin(params,sub_url='') {
        return Observable.create(observer => {
            // 前台，本地没有token时的登录验证
            this.http.getToken().subscribe(token => {
                if (token === false) {
                    this.modalNoData("LoginPage");
                    observer.next(false);
                    return false;
                }
                params.token = token;
                this.http.post(sub_url,params).subscribe(res => {
                    if (res.code == 0) {
                        // 接口请求成功返回接口数据
                        observer.next(res);
                    } else if (res.code == -1) {
                        // 本地有token，后台验证登录过期，重新登录
                        this.pop.confirm().subscribe(res => {
                            if (res === false) {
                                this.modalNoData("LoginPage");
                                observer.next(false);
                            }
                        });
                    } else {
                        // 其他情况弹出消息提示
                        this.pop.toast(res.message);
                    }
                })
            });
        });
    }
// 验证是否登录以及登录过期重新登录
    public checkLogin() {
        return Observable.create(observer => {
            // 前台，本地没有token时的登录验证
            this.http.getToken().subscribe(token => {
                if (token === false) {
                    this.modalNoData("LoginPage");
                    observer.next(false);
                }else{
                    observer.next(true);
                }
            });
        });
    }

    /**
     * modal模型关闭时不需回调的modal页
     * @param page
     * @param params
     */
    public modalNoData(page,params?){
        let modal;
        if(params){
            modal = this.modalCtrl.create(page,params);
        }else{
            modal = this.modalCtrl.create(page);
        }
        modal.present();
    }

    /**
     * modal模型关闭时需要回调的modal页
     * @param page
     * @param params
     */
    public modalWidthData(page,params?){
        let modal;
        if(params){
            modal = this.modalCtrl.create(page,params);
        }else{
            modal = this.modalCtrl.create(page);
        }
        modal.present();
        // modal关闭时的回调函数
        modal.onDidDismiss(res => {
            console.log(res);
        })
    }
}

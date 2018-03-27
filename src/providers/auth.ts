import {Injectable, ViewChild} from '@angular/core';
import 'rxjs/add/operator/map';
import {Nav} from 'ionic-angular';
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
        public http: HttpProvider) {

    }

    // 验证是否登录以及登录过期重新登录
    public authLogin(params,sub_url='') {
        return Observable.create(observer => {
            // 前台，本地没有token时的登录验证
            this.http.getToken().subscribe(token => {
                if (token === false) {
                    observer.next("toLogin");
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
                                observer.next("toLogin");
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
                    observer.next("toLogin");
                }else{
                    observer.next(true);
                }
            });
        });
    }

}

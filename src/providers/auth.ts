import {Injectable, ViewChild} from '@angular/core';
import 'rxjs/add/operator/map';
import {Nav} from 'ionic-angular';
import {PopProvider} from "./pop";
import { Storage } from '@ionic/storage';//这引入

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
    @ViewChild(Nav) nav:Nav;
    public token;//登录记录的token值
  constructor(
      public pop:PopProvider,
      public storage:Storage
  ) {
        this.token = this.storage.get('token');
  }

  //检查token如果存在，返回token，不存在则跳转到登录页
  checkToken(){
      console.log('跳转到登录1');
      console.log(this.token);
    if(!this.token){
        console.log('跳转到登录2');
        this.pop.toast('请先登录');
        this.nav.push(' LoginPage');
        console.log('跳转到登录');
        return false;
    }
    return this.token;
  }

}

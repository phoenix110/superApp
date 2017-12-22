import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpProvider} from "./http";

/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppProvider {

  constructor(
      public Http: HttpProvider
  ) {

  }

  //获取app配置信息
    getConfig(){
      return this.Http.post({
          op:"get_config"
      });
    }
}

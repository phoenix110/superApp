import { Injectable } from '@angular/core';
import { ActionSheetController } from "ionic-angular";
import 'rxjs/add/operator/map';
// 注入自定义服务
import { GlobalDataProvider } from "./globalData";
/*
  Generated class for the LoggerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoggerProvider {

  constructor(
      public globalData: GlobalDataProvider
  ) {
    console.log('Hello LoggerProvider Provider');
  }
    public log(err: any, action: string, other = null): void {
        console.log('Logger.log：action-' + action);
        other && console.log(other);
        console.log(err);

    }

    public httpLog(err: any, msg: string, other = {}): void {
        console.log('Logger.httpLog：msg-' + msg);
    }
}

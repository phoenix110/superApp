import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
// 注入自定义服务
import { GlobalDataProvider } from "./globalData";
declare var fundebug;
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
        fundebug.notifyError(err,
            {
                metaData: {
                    action: action,//操作名称
                    other: other,//其他数据信息
                    user: {id: this.globalData.userId, name: this.globalData.username}
                }
            });
    }

    public httpLog(err: any, msg: string, other = {}): void {
        console.log('Logger.httpLog：msg-' + msg);
        fundebug.notifyHttpError(err,
            {
                metaData: {
                    action: msg,//操作名称
                    other: other,//其他数据信息
                    user: {id: this.globalData.userId, name: this.globalData.username}
                }
            });
    }
}

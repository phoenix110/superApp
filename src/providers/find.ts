import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpProvider} from "./http";

/*
  Generated class for the FindProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FindProvider {

  constructor(public Http: HttpProvider) {
    console.log('Hello FindProvider Provider');
  }
    //获取我的圈子列表
    public getCircleList(type = 0, page = 1, token = '') {
        return this.Http.post('circle',{
            type: type,
            page: page,
            token: token
        });
    }
    // 获取缘分列表
    public getLuckList(params){
      let options = {
          page:params.page
      };
      return this.Http.post('luck',options);
    }
}

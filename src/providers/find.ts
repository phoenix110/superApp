import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpProvider} from "./http";
import { Observable } from "rxjs/Observable";

/*
  Generated class for the FindProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FindProvider {

  constructor(
      public http:HttpProvider
  ) {

  }
    public circleList = [];
  //获取菜单列表
  getList(){
      return this.http.post({
          op:'get_find'
      });
  }
    //获取圈子列表
    public getCircleList(type = 0,page = 1,token = '') {
        return this.http.post({
            op: 'get_circle_list',
            type: type,
            page: page,
            token:token
        });
    }

}

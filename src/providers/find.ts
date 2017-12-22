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

  constructor(
      public http:HttpProvider
  ) {

  }

  //获取菜单列表
  getList(){
      return this.http.post({
          op:'get_find'
      });
  }

}

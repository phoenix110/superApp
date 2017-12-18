import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpProvider} from "./http";

/*
  Generated class for the UnionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UnionProvider {

  public data;

  constructor(  public http: HttpProvider) {

  }

  //获取分类和公司信息
  getList(page = 1,cid = 0){
      let options = {
          op: "union",
          page:page,
          cid:cid
      };
      return this.http.post(options);
  }
}

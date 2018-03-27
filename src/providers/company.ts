import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpProvider} from "./http";

/**
 * 公司Provider
 */
@Injectable()
export class CompanyProvider {
  constructor(public http: HttpProvider) {

  }

  //获取公司详情
  getInfo(id){
      return this.http.post('company',{
          id:id
      });
  }

}

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpProvider} from "./http";
import {AuthProvider} from "./auth";
/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderProvider {

  constructor(
      public Http: HttpProvider,
      public Auth:AuthProvider
  ) {

  }
    // 获取所有订单状态列表
    public orderList(params){
        let options = {
            op:"get_orders",
            status:params.status,
            page:params.page
        };
        return this.Auth.authLogin(options);
    }
}

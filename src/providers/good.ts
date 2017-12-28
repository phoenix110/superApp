import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpProvider} from "./http";

/*
  Generated class for the GoodProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoodProvider {

  constructor(public Http: HttpProvider) {
    console.log('Hello GoodProvider Provider');
  }
  // 获取商品详情
  public getGoodDetail(id){
    let options = {
      op:"get_goods_detail",
        id:id
    };
    return this.Http.post(options);
  }
}

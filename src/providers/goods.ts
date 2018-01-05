import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpProvider} from "./http";
import {AuthProvider} from "./auth";

/*
  Generated class for the GoodProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoodsProvider {

  constructor(
      public Http: HttpProvider,
      public Auth:AuthProvider) {
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
  // 获取更多商品列表
    public moreGoods(params){
        let options = {
            op:"get_goods_detail",
            id:params.catId,
            page:params.page
        };
        return this.Http.post(options);
    }
    // 购买商品
    public goodsBuy(params){
        let options = {
            op:"push_order",
            goods_id :params.id,
            sku_key :params.sku_key,
            sku_desc  :params.sku_desc,
            buy_num :params.num
        };
        return this.Auth.authLogin(options);
    }
    // 添加至购物车
    public goodsAddCart(params){
        let options = {
            op:"push_circle_talk",
            circle_id:params.zid,
            content:params.content,
            thumb:params.thumb
        };
        return this.Auth.authLogin(options);
    }
}

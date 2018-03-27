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
    // 确认下单
    public orderConfirm(params,type=''){
       let options = {};
       // 类型为空，来自直接下单
        if(type == ''){
            options = {
                push_type:0,
                goods_id :params.id,
                sku_key :params.sku_key,
                sku_desc  :params.sku_desc,
                buy_num :params.num,
                note:params.note,
                address_id:params.address_id
            };
        }else{
            // 类型不为空，来自购物车
            options = {
                push_type:1,
                note:params.note,
                id :params.ids,
                address_id:params.address_id
            };
        }
        return this.Auth.authLogin(options,'order/push');
    }
    // 获取已下单订单的详情信息
    public getOrderInfo(id){
        let options = {
            id:id
        };
        return this.Auth.authLogin(options,'pay');
    }
    // 支付宝、微信、余额付款
    public payMoney(params,pwd = 0){
        let options = {};
        if(pwd === 0){
            options = {
                id:params.id,
                pay_method:params.payMethod
            };
        }else{
            options = {
                id:params.id,
                pay_method:params.payMethod,
                password:pwd
            };
        }

        return this.Auth.authLogin(options,'pay/push');
    }
    // 已下单订单信息页数据
    public orderInfo(id){
        let options = {
            id:id
        };
        return this.Auth.authLogin(options,'order');
    }
    // 获取所有订单状态列表
    public orderList(params){
        let options = {
            status:params.status,
            page:params.page
        };
        return this.Auth.authLogin(options,'order');
    }
}

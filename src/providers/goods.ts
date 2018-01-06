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
    public goodsBuy(params,type = ""){
        let options = {};
        console.log(type)
        if(type == ''){
            options = {
                op:"check_order",
                goods_id :params.id,
                sku_key :params.sku_key,
                sku_desc  :params.sku_desc,
                buy_num :params.num,
                address_id:params.address_id
            };
        }else{
            options = {
                op:"check_order",
                id :params.ids,
                // ids :params.ids
            };
        }
        console.log(params)
        return this.Auth.authLogin(options);
    }
    // 添加至购物车
    public goodsAddCart(params){
        let options = {
            op:"add_cart",
            goods_id :params.id,
            sku_key :params.sku_key,
            sku_desc  :params.sku_desc,
            buy_num :params.num,
            address_id:params.address_id
        };
        return this.Auth.authLogin(options);
    }
    // 获取用户地址列表
    public addressList(){
        let options = {
            op:"get_address",
        };
        return this.Auth.authLogin(options);
    }
    // 添加新地址
    public addNewAddress(params){
        let options = {
            op:"add_address",
            realname:params.name,
            mobile:params.mobile,
            province:params.province,
            city:params.city,
            district:params.district,
            address:params.area
        };
        return this.Auth.authLogin(options);
    }
    // 获取当前地址详情
    public getAddressInfo(id){
        let options = {
            op:"address_detail",
            id:id
        };
        return this.Auth.authLogin(options);
    }
    // 编辑保存当前地址
    public editSaveAddress(params){
        let options = {
            op:"update_address",
            realname:params.name,
            mobile:params.mobile,
            province:params.province,
            city:params.city,
            district:params.district,
            address:params.area
        };
        return this.Auth.authLogin(options);
    }
    // 删除当前收货地址
    public delAddress(id){
        let options = {
            op:"delete_address",
            id:id
        };
        return this.Auth.authLogin(options);
    }
    // 设为默认地址
    public defaultAddress(id){
        let options = {
            op:"set_default_address",
            id:id
        };
        return this.Auth.authLogin(options);
    }
}

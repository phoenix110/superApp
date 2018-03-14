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
        id:id
    };
    return this.Http.post('goods/detail',options);
  }
  // 获取更多商品列表
    public moreGoods(params){
        let options = {
            id:params.catId,
            page:params.page
        };
        return this.Http.post('goods/detail',options);
    }
    // 购买商品
    public goodsBuy(params,type = ""){
        let options = {};
        if(type == ''){
            options = {
                goods_id :params.id,
                sku_key :params.sku_key,
                sku_desc  :params.sku_desc,
                buy_num :params.num,
                address_id:params.address_id
            };
        }else{
            options = {
                id :params.ids,
                // ids :params.ids
            };
        }
        return this.Auth.authLogin(options,'order/check');
    }
    // 添加至购物车
    public goodsAddCart(params){
        let options = {
            goods_id :params.id,
            sku_key :params.sku_key,
            sku_desc  :params.sku_desc,
            buy_num :params.num,
            address_id:params.address_id
        };
        return this.Auth.authLogin(options,'cart/add');
    }
    // 删除购物车商品
    public delCartGoods(id){
        let options = {
            id:id
        };
        return this.Auth.authLogin(options,'cart/delete');
    }
    // 修改购物车商品数量
    public editCartGoods(params){
        let options = {
            cart_id:params.cartId,
            buy_num:params.buyNum
        };
        return this.Auth.authLogin(options,'cart/update');
    }
    // 获取用户地址列表
    public addressList(){
        return this.Auth.authLogin({},'address');
    }
    // 添加新地址
    public addNewAddress(params){
        let options = {
            realname:params.name,
            mobile:params.mobile,
            province:params.province,
            city:params.city,
            district:params.district,
            address:params.area
        };
        return this.Auth.authLogin(options,'address/add');
    }
    // 获取当前地址详情
    public getAddressInfo(id){
        let options = {
            id:id
        };
        return this.Auth.authLogin(options,'address/detail');
    }
    // 编辑保存当前地址
    public editSaveAddress(params){
        let options = {
            realname:params.name,
            mobile:params.mobile,
            province:params.province,
            city:params.city,
            district:params.district,
            address:params.area
        };
        return this.Auth.authLogin(options,'address/update');
    }
    // 删除当前收货地址
    public delAddress(id){
        let options = {
            id:id
        };
        return this.Auth.authLogin(options,'address/delete');
    }
    // 设为默认地址
    public defaultAddress(id){
        let options = {
            id:id
        };
        return this.Auth.authLogin(options,'address/set_default');
    }
}

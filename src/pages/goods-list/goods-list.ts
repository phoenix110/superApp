import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {PopProvider} from "../../providers/pop";
import {GoodsProvider} from "../../providers/goods";

/**
 * Generated class for the GoodsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment:"goodsList/:cid"
})
@Component({
  selector: 'page-goods-list',
  templateUrl: 'goods-list.html',
})
export class GoodsListPage {
    public shopData:Array<object> = [];
    public pageParams = {
        catId:0,
        page:1
    };
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public Goods:GoodsProvider,
      public Pop:PopProvider) {
      this.pageParams.catId = this.navParams.get("cid");
  }

    ionViewDidLoad() {
        this.getShopData();
    }

    // 获取更多商品列表数据
    public getShopData(){
        this.Goods.moreGoods(this.pageParams).subscribe(res =>{
            if(res.code == 0){
                this.shopData = res.data;
                return false;
            }
            this.Pop.toast(res.message);
        })
    }
    // 下拉刷新
    public doRefresh(evt){
        this.Goods.moreGoods(this.pageParams).subscribe(res =>{
            if(res.code == 0){
                this.shopData = res.data;
                evt.complete();
                return false;
            }
            this.Pop.toast(res.message);
        })
    }
    // 上拉加载更多
    public getMore(evt){
        this.Goods.moreGoods(this.pageParams).subscribe(res =>{
            if(res.code == 0){
                this.pageParams.page ++;
                this.shopData.concat(res.data);
                evt.complete();
                return false;
            }
            this.Pop.toast(res.message);
        })
    }
}

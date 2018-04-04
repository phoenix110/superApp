import { Component , ViewChildren, QueryList } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as Swiper from "swiper";
import {TabsProvider} from "../../providers/tabs";
import {PopProvider} from "../../providers/pop";

/**
 * Generated class for the MallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mall',
  templateUrl: 'mall.html',
})
export class MallPage {

    @ViewChildren("swiperChild") swiperChildren:QueryList<Swiper>;
    public shopData:Array<object> = [];
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public http:HttpClient,
      public Tabs:TabsProvider,
      public Pop:PopProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MallPage');
    // this.mallData();
    this.getmallData();
  }

    // 获取商城首页数据
    public getmallData(){
        this.Tabs.getShopList().subscribe(res =>{
            if(res.code == 0){
                this.shopData = res.data;
                this.initSwiper();
                return false;
            }
            this.Pop.toast(res.message);
        })
    }
  // 初始化slides轮播组件
    public initSwiper(){
        new Swiper(".swiper-parent",{
            direction:"vertical",
            observer:true,
            observeParents:true,
            initialSlide :0,
            // 如果需要分页器
            pagination: '.swiper-pagination'
        });
        // 监听@viewChildren组件的填充内容增加或删除后自动更新@viewChildren集合的值
        this.swiperChildren.changes.subscribe(()=>{
            new Swiper(".swiper-child",{
                slidesPerView:"auto",
                pagination : '.child-pagination',
                paginationType : 'fraction',
                observer:true,
                observeParents:true,
                effect:"cube",
                cube:{
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 30,
                    shadowScale: 1.0
                }
            });
        });
    }
}

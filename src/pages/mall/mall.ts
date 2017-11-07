import { Component , ViewChildren, QueryList, ElementRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import * as Swiper from "swiper";
import * as Jquery from "Jquery";

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
    @ViewChildren("swiperChild") swiperChildren:QueryList<ElementRef>;
  public good:Array<object> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MallPage');
      console.log(this.swiperChildren['length']);
      this.mallData();

  }
  // 获取mall数据
  public mallData(){
    this.http.get("./assets/data.json").subscribe(data=>{
      this.good = data["mall"];
        this.initSwiper();

    });
  }
  // 初始化slides轮播组件
    public initSwiper(){
        new Swiper(".swiper-parent",{
            direction:"vertical",
            slidesPerView:"auto",
            observer:true,
            observeParents:true
        });
        console.log(Jquery(".mall-title"))
        this.swiperChildren["_results"].forEach(function (item,index) {
            console.log(4154545);
             new Swiper(".swiper-child",{
                slidesPerView:"auto",
                observer:true,
                observeParents:true,
            });
        });

    }
}

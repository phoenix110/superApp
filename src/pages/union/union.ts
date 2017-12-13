

import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, IonicPage, Slides} from 'ionic-angular';

import {HttpClient} from "@angular/common/http";
import  Swiper from 'swiper';
import { Storage } from "@ionic/storage";

/**
 * Generated class for the UnionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-union',
    templateUrl: 'union.html',
})
export class UnionPage {
    @ViewChild(Slides) slides:Slides;
    public union: Array<object> = [];
    public recommend: Array<object> = [];
    public colorArr: string[] = [];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public http: HttpClient,
        private Storage:Storage) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad UnionPage');
        this.getShopData();
        this.initSwiper();
    }

    // 获取联盟页面数据
    public getShopData() {
        this.http.get("./assets/data.json").subscribe(data => {
            this.union = data['union'];
            this.getColorArr();
            this.categoryList(0);
            // this.slides.freeMode = true;
            // this.slides.slidesPerView = "auto";
        });
    }

    // 导航至分类详情页
    public toCompany(id) {
        console.log(id, '12121');
        this.navCtrl.push('CompanyPage', {id});
    }

    // 点击分类切换相应商品
    public categoryList(index) {
        this.recommend = this.union[index]['goods'];
    }

    // 给颜色数组赋值
    public getColorArr() {
        for (let i in this.union) {
            // 获取随机的颜色值
            let color = '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
            this.colorArr.push(color);
        }
    }
    // 初始化轮播图插件
    public initSwiper(){
        new Swiper(".swiper-container",{
            freeMode:true,
            slidesPerView:"auto",
            observer:true,
            observeParents:true,
        });
    }
}

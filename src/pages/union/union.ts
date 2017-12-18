

import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, IonicPage, Slides} from 'ionic-angular';

import  Swiper from 'swiper';
import { Storage } from "@ionic/storage";

import {UnionProvider} from "../../providers/union";
import {PopProvider} from "../../providers/pop";

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

    public companies; //公司列表
    public categories;//分类列表
    public colors;//颜色数组
    public active_index;//当前激活索引
    public cid;//当前分类
    public page;//当前页数

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public msgService:PopProvider,
        public unionService: UnionProvider,
        private Storage:Storage) {

        //初始化变量
        this.active_index = 0;
        this.colors = [
            '#758fc8',
            '#17b1c0',
            '#f9624f',
            '#767779',
            '#48a5e0',
            '#ef97b0',
            '#83c690',
            '#758fc8'
        ];
        this.page = 1;
        this.cid = 0;
    }

    ionViewDidLoad() {

        //获取联盟页数据
        this.unionService.getList().subscribe(res => {
            if (res.code == '0') {
                this.categories = res.data['categories'];
                this.companies = res.data['companies'];
                return true;
            }
            this.msgService.toast(res.message);
        });

        //初始化swiper
        this.initSwiper();
    }


    //index索引，改变按钮颜色；cid获取相关的公司列表
    public getCompanyList(index,cid){
        this.active_index = index;
        this.unionService.getList(1,cid).subscribe(res => {
            if (res.code == '0') {
                this.companies = res.data['companies'];
                if(this.companies.length == 0){
                    this.msgService.toast('没有搜索到相关的公司');
                }
                return true;
            }
            this.msgService.toast(res.message);
        });
    }


    // 导航至分类详情页
    public toCompany(id) {
        this.navCtrl.push('CompanyPage', {id:id});
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

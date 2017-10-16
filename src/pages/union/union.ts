import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { CompanyPage } from '../company/company'
import * as Swiper from 'swiper';
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
  public categoryArr: Array<object> = [
      {
          id: 1,
          name:"特别推荐",
          goods:[
              {   id:7,
                  imgSrc:"assets/images/item01.jpg",
                  thumb:"assets/images/icon01.jpg",
                  title:"水映兰庭"
              },
              {
                  id:8,
                  imgSrc:"assets/images/item02.jpg",
                  thumb:"assets/images/icon02.jpg",
                  title:"邹氏治愈集"
              },
              {
                  id:9,
                  imgSrc:"assets/images/item03.jpg",
                  thumb:"assets/images/icon03.jpg",
                  title:"传世传奇"
              },
              {
                  id:10,
                  imgSrc:"assets/images/item04.jpg",
                  thumb:"assets/images/icon04.jpg",
                  title:"诺漫斯商城"
              }
          ]
      },{
          id: 2,
          name:"女性",
          goods:[
              {     
                  id:1,
                  imgSrc:"assets/images/item02.jpg",
                  thumb:"assets/images/icon03.jpg",
                  title:"水映兰庭"
              },
              {
                  id:2,
                  imgSrc:"assets/images/item04.jpg",
                  thumb:"assets/images/icon04.jpg",
                  title:"诺漫斯商城"
              }
          ]
      },{
          id: 3,
          name:"产品",
          goods:[
              {     
                  id:3,
                  imgSrc:"assets/images/item03.jpg",
                  thumb:"assets/images/icon03.jpg",
                  title:"水映兰庭"
              },
              {
                  id:"4",
                  imgSrc:"assets/images/item02.jpg",
                  thumb:"assets/images/icon02.jpg",
                  title:"邹氏治愈集"
              }
          ]
      },{
          id: 4,
          name:"美容",
          goods:[
              {
                  id:5,
                  imgSrc:"assets/images/item04.jpg",
                  thumb:"assets/images/icon04.jpg",
                  title:"水映兰庭"
              },
              {
                  id:6,
                  imgSrc:"assets/images/item06.jpg",
                  thumb:"assets/images/icon02.jpg",
                  title:"邹氏治愈集"
              },
              {
                  id:7,
                  imgSrc:"assets/images/item07.jpg",
                  thumb:"assets/images/icon01.jpg",
                  title:"传世传奇"
              }
          ]
      }
  ];
  public goodInstro: object[] = [];
  public colorArr: string[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnionPage');
      this.getColorArr();
      this.categoryTap(0);
  }
  // 导航至分类详情页
  private company(id){
    console.log(id);
    this.navCtrl.push(CompanyPage,{id});
  }
  // 点击分类切换相应商品
  private categoryTap(index){
      this.goodInstro = this.categoryArr[index]['goods'];
  }
  // 给颜色数组赋值
  private getColorArr(){
      for( let i in this.categoryArr){
          this.colorArr.push(this.getRandomColor());
      }
  }
  // 获取随机的颜色值
   private getRandomColor(){
        return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
    }
    private swiperButton(){
       new Swiper ('.swiper-button',{

       })
    }
}

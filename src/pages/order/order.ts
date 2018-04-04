import { Component ,ViewChild} from '@angular/core';
import {InfiniteScroll, IonicPage, NavController, NavParams, Slides, Content } from 'ionic-angular';
import {OrderProvider} from "../../providers/order";
import {PopProvider} from "../../providers/pop";

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
    @ViewChild(Slides) slides: Slides;
    @ViewChild(Content) content: Content;
  public orderList:Array<object> = [];
  public orderStatus:Array<string> = [];
  public loadStatus:boolean = true;
  public orderParams:object = {
    status:0,
    page:1
  };
  public orderType:number = 0;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public Order:OrderProvider,
      public Pop:PopProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
    this.getOrderList();
    this.initSlides();
  }
  // 跳转至订单信息页面
  public toOrderInfo(id){
    this.navCtrl.push("OrderInfoPage",{id:id});
  }
  // 获取所有订单列表
  public getOrderList(){
    this.Order.orderList(this.orderParams).subscribe( res => {
        if (res !== false) {
            this.orderStatus = res.data.statuses;
            this.orderList = res.data.list;
        }
    })
  }
  public initSlides(){
      this.slides.slidesPerView = "auto";
      this.slides.freeMode = true;
      this.slides.spaceBetween = 20;
  }
  // 查看不同状态的订单信息
  public setOrderType(index){
      this.orderType = index;
      this.orderParams['status'] = index;
      this.orderParams['page'] = 1;
      this.loadStatus = true;
      // this.content.scrollTo(2, 0, 100);
      this.getOrderList();
  }
    // 下拉刷新
    public doRefresh(evt){
        this.orderParams['status'] = this.orderType;
        this.orderParams['page'] = 1;
        this.Order.orderList(this.orderParams).subscribe(res =>{
            if (res !== false) {
                this.orderList = res.data.list;
                evt.complete();
            }
        })
    }
    // 上拉加载更多
    public loadMore(infiniteScroll: InfiniteScroll){
        this.orderParams['status'] = this.orderType;
        this.orderParams['page'] ++;
        this.Order.orderList(this.orderParams).subscribe(res =>{
            if (res !== false) {
                if(res.data.list.length <= 0){
                    this.loadStatus = false;
                    return false;
                }
                this.orderList = this.orderList.concat(res.data.list);
                infiniteScroll.complete();
            }
        })
    }
}

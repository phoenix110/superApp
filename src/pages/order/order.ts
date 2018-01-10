import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides  } from 'ionic-angular';
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
  public orderList:Array<object> = [];
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
        if (res === "toLogin") {
            this.navCtrl.push("LoginPage");
            return false;
        }
        this.orderList = res.data;
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
      this.getOrderList();
  }
    // 下拉刷新
    public doRefresh(evt){
        this.Order.orderList(this.orderParams).subscribe(res =>{
            if(res.code == 0){
                this.orderList = res.data;
                evt.complete();
                return false;
            }
            this.Pop.toast(res.message);
        })
    }
    // 上拉加载更多
    public getMore(evt){
        this.Order.orderList(this.orderParams).subscribe(res =>{
            if(res.code == 0){
                this.orderParams['page'] ++;
                this.orderList.concat(res.data);
                evt.complete();
                return false;
            }
            this.Pop.toast(res.message);
        })
    }
}

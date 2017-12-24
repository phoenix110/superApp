import { Component  } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NavController, NavParams,IonicPage } from 'ionic-angular';

/**
 * Generated class for the GoodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    segment:"good/:id",
})
@Component({
  selector: 'page-good',
  templateUrl: 'good.html',
})
export class GoodPage {
  public goodDetail: Object= {};
  public loginStatus:false;
    constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
        this.goodsData();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodPage');
  }
  // 请求商品详情页数据
  public goodsData(){
    this.http.get("./assets/data.json").subscribe(data=>{
      this.goodDetail = data['good'];
    });
  }
  // 去评论
  public toTalk(){
    if(this.loginStatus){
      // 跳转至商品评论页面
    }else{

    }
  }
}

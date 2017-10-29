import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toutiao',
  templateUrl: 'toutiao.html',
})
export class TouTiaoPage {

    public touTiao:Array<object> = [];
    constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CirclePage');
        this.getCircleData();
    }
    // 获取圈子页面数据
    public getCircleData() {
        this.http.get("/assets/data.json").subscribe(data => {
            this.touTiao = data['touTiao'];
        });
    }
    // 跳转至头条新闻详情页
    public toDetail(id){
        this.navCtrl.push("ToutiaoDetailPage",{id:id});
    }
}

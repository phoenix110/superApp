import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NavController, NavParams,IonicPage } from 'ionic-angular';

/**
 * Generated class for the FindPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-find',
  templateUrl: 'find.html',
})
export class FindPage {
  public find:Array<object> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  ionViewDidLoad() {
      this.getFindData();
  }
  // 获取find页面数据
  public getFindData(){
    this.http.get("./assets/data.json").subscribe(data=>{
      this.find = data['find'];
    });
  }
  // 跳转至find分类页面
    public toFind(route){
      this.navCtrl.push(route);
    }
}

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NavController, NavParams,IonicPage } from 'ionic-angular';
import {PopProvider} from "../../providers/pop";
import {FindProvider} from "../../providers/find";
import {Http} from "@angular/http";

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
  public menus;//菜单列表
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public http:HttpClient,
      public msgService:PopProvider,
      public findService:FindProvider
  ) {

  }

  ionViewDidLoad() {
      this.findService.getList().subscribe(res=>{
          if(res.code == 0){
                this.menus = res.data;
          }
          this.msgService.toast(res.message);
      });
  }
  // 跳转至find分类页面
    public toFind(route){
      if(route == 'CompanyPage'){
          this.navCtrl.push(route,{
              id:1
          });
      }else{
          this.navCtrl.push(route);
      }

    }
}

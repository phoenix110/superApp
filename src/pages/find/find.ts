import { Component } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';
import {PopProvider} from "../../providers/pop";
import {TabsProvider} from "../../providers/tabs";

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
      public msgService:PopProvider,
      public Tabs:TabsProvider
  ) {

  }

  ionViewDidLoad() {
      this.Tabs.getFindList().subscribe(res=>{
          if(res.code == 0){
                this.menus = res.data;
                return true;
          }
          this.msgService.toast(res.message);
      });
  }
  // 跳转至find分类页面
    public toFind(route){
        this.navCtrl.push(route);
    }
}

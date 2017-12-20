import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import {PopProvider} from "../../providers/pop";
import {CompanyProvider} from "../../providers/company";

/**
 * Generated class for the CompanyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    segment:'company/:id'
})
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class CompanyPage {

  public active_index:number = 0;//当前激活的栏目索引
  public company = {
      'title':''
  };//公司信息
  public menus;//文章栏目
  public company_id;//公司ID

  constructor(
      public navCtrl: NavController,
      public msgProvider:PopProvider,
      public navParams: NavParams,
      public companyService:CompanyProvider
  ) {
  	    //获取公司ID
      this.company_id = this.navParams.data['id'];
  }

  ionViewDidLoad() {
      this.getCompanyInfoById(this.company_id);
  }


  public getCompanyInfoById(id){
      //获取公司信息
      this.companyService.getInfo(id).subscribe(res=>{
          if(res.code == 0){
              this.company = res.data['info'];
              this.menus = res.data['menus'];
              if(this.menus.length == 0){
                  this.msgProvider.toast('本公司网站还没有设置相关栏目');
              }
              return true;
          }
          this.msgProvider.toast(res.message);
      });
  }



  // 跳转至文章详情页
  public toArticle(cid){
      this.navCtrl.push('ArticlePage',{cid:cid,id:0});
  }


  public setActiveIndex(index){
    this.active_index = index;
  }
}

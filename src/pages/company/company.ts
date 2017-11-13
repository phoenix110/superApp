import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NavController, NavParams, IonicPage } from 'ionic-angular';

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
  private index:number = 0;
  public company: object = {
      companyInstro:[],
      contact:{}
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  	console.log(this.navParams.data.id);
  }

  ionViewDidLoad() {
    this.getCompanyData();
  }

  // 跳转至文章详情页
  public toArticle(id){
      this.navCtrl.push('ArticlePage',{id:id});
  }
    // 获取公司官网页面数据
    public getCompanyData(){
        this.http.get("./assets/data.json").subscribe(data=>{
            this.company["companyInstro"] = data['company']['companyInstro'];
            this.company["contact"] = data['company']['contact'];
        });
    }
  public newStatus(index){
    this.index = index;
    console.log(index)
  }
}

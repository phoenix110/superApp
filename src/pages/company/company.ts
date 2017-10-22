import { Component } from '@angular/core';
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
  private companyInstro: Array<object> = [
      {
        title:'首页',
        thumb:'assets/images/company/company01.jpg'
      },
      {
          title:'SuperCard 超G名片',
          thumb:'assets/images/company/company02.jpg'
      },
      {
          title:'SuperTeam 研发及运营团队',
          thumb:'assets/images/company/company03.jpg'
      },
      {
          title:'SuperService 服务支持',
          thumb:'assets/images/company/company04.jpg'
      },
      {
          title:'SuperMind 思想&观点',
          thumb:'assets/images/company/company05.jpg'
      },
      {
          title:'企业介绍',
          thumb:'assets/images/company/company06.jpg'
      },
      {
          title:'Brand Vision 品牌形象',
          thumb:'assets/images/company/company07.jpg'
      },
      {
          title:'新闻动态',
          thumb:'assets/images/company/company08.jpg'
      }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	console.log(this.navParams.data.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage');
  }
  close(){
  	this.navCtrl.pop();
  }
  public toArticle(id){
      this.navCtrl.push('ArticlePage',{id:id});
  }
  public newStatus(index){
    this.index = index;
    console.log(index)
  }
}

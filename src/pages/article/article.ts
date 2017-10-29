import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the ArticlePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    segment:"article/:id"
})
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient ) {
  }
    public article:Object = {};

  ionViewDidLoad() {
      this.getArticle();
  }
  // 获取文章详情数据
  public getArticle(){
      return this.http.get("/assets/data.json").subscribe(data=>{
          this.article = data['article'];
      })
  }
  // 跳转至文章详情页
  public toArticleCont (id){
      console.log(id);
      this.navCtrl.push('ArticlePage',{id:id});
  }
}

import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import {ArticleProvider} from "../../providers/article";
import {PopProvider} from "../../providers/pop";
import {DomSanitizer} from "@angular/platform-browser";

/**
 * Generated class for the ArticlePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    segment:"article/:cid/:id"
})
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {
    public cid; //文章栏目ID
    public id;//文章ID
    public item = {
        title:'返回',
        detail:'很抱歉，没有找到相关文章'
    };//文章详情
    public list;//文章列表
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public http:HttpClient,
      public articleService:ArticleProvider,
      public msgProvider:PopProvider,
      private sanitizer: DomSanitizer
  ) {
      this.cid = this.navParams.data['cid'];
      this.id = this.navParams.data['id'];
  }

  ionViewDidLoad() {
      this.getArticleInfo(this.cid,this.id);
  }

  //获取文章详情
    public getArticleInfo(cid,id){
        this.articleService.getInfo(cid,id).subscribe(res=>{
            if(res.code == 0){
                this.item = res.data['info'];
                if(this.item.title == ''){
                    this.msgProvider.toast('没有找到相关的文章');
                }
                if(res.data['list'].length > 0){
                    this.list = res.data['list'];
                }
                return true;
            }
            this.msgProvider.toast(res.message);
        });
    }

    assembleHTML(strHTML:any) {
        return this.sanitizer.bypassSecurityTrustHtml(strHTML);
    }

  // 跳转至文章详情页
  public toArticleCont (cid,id = 0){
      this.navCtrl.push('ArticlePage',{cid:cid,id:id});
  }
}

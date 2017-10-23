import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { Http, Response } from "@angular/http";

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/**
 * Generated class for the ArticlePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Injectable()
@IonicPage({
    segment:"article/:id"
})
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage');
    this.getArticle().subscribe(res=>console.log(res));
  }
  public getArticle(): Observable<void>{
    return this.http.get("assets/data.json").map(response => console.log(response));
  }
}

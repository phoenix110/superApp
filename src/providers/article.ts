import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpProvider} from "./http";

/*
  Generated class for the ArticleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArticleProvider {

  constructor(public http:HttpProvider) {

  }

    //获取文章详情
    getInfo(cid,id){
        let options = {
            op: "get_article",
            id:id,
            cid:cid
        };
        return this.http.post(options);
    }

}

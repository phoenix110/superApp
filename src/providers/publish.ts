import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
// 注入服务
import {HttpProvider} from "./http";
import {PopProvider} from "./pop";
import {AuthProvider} from "./auth";

/*
  Generated class for the PublishProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PublishProvider {

    constructor(
        public Http: HttpProvider,
         public Pop: PopProvider,
        public Auth:AuthProvider) {
    }

    // 圈子发布
    public pubCircle(params) {

        // let options = {
        //     op: "push_circle",
        //     token:params.token,
        //     content:params.content,
        //     src: params.src
        // };
        return this.Http.formData(params);
    }
    // 点赞功能
    public dianZan(zid){
        let options = {
            op:"push_circle_like",
            circle_id:zid
        };
        return this.Auth.authLogin(options);
    }
    // 发送圈子评论
    public sendComment(params){
        let options = {
            op:"push_circle_talk",
            circle_id:params.zid,
            content:params.content,
            thumb:params.thumb
        };
        return this.Auth.authLogin(options);
    }
}

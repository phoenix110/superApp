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

        let options = {
            content:params.content,
            src: params.src
        };
        return this.Auth.authLogin(options,'circle/push');
    }
<<<<<<< HEAD
    // 打赏功能
    public giveReward(params){
        let options = {
            rewardId:params.id,
            money:params.money
        };
        return this.Auth.authLogin(options,'circle/reward');
    }
    // 发起投诉
    public sendComplian(params){
        let options = {
            idea:params.idea,
            own:params.own,
            thumb:params.imgPath,
            id:params.complainId
        }
        return this.Auth.authLogin(options,'circle/complain');
    }
=======
>>>>>>> 85b256bd82b61c68355346efa001f0aba0bde47a
    // 点赞功能
    public dianZan(zid){
        let options = {
            circle_id:zid
        };
        return this.Auth.authLogin(options,'circle/push_like');
    }
    // 发送圈子评论
    public sendComment(params){
        let options = {
            circle_id:params.zid,
            content:params.content,
            thumb:params.thumb
        };
        return this.Auth.authLogin(options,'circle/push_talk');
    }
    // 头条、新闻、客服页面添加评论
    public addComment(params){
        let options = {
            id:params.id,
            content:params.content,
            src:params.src
        };
        return this.Auth.authLogin(options,'circle/'+params.op);
    }
}

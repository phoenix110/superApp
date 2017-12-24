import {Injectable} from '@angular/core';
import { Subject } from "rxjs/Subject";

/*
  Generated class for the TongxinProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class Comment {
    showStatus:boolean;
    commentData:object;
}
export class Publish{
    circleData:object
}
@Injectable()
export class TongxinProvider {
    public commentStatus:Comment = {
        showStatus:false,
        commentData:{}
    };
    public publish:Publish = {
        circleData:{}
    };
    constructor() {
        console.log('Hello TongxinProvider Provider');
    }
    private Source=new Subject<any>();
    public Status$=this.Source.asObservable();
    // 圈子添加评论组件间通信
    public CircleComment(data) {
        this.commentStatus.showStatus = !this.commentStatus.showStatus;
        this.commentStatus.commentData = data;
       this.Source.next(this.commentStatus);
    }
    // 个人中心发布页组件通信
    public pubCircle(data){
        this.publish.circleData = data;
    }
}

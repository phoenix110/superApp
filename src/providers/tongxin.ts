import {Injectable} from '@angular/core';
import { Subject } from "rxjs/Subject";

/*
  Generated class for the TongxinProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class Comment {
    showStatus:boolean;
    commentId:number;
}
@Injectable()
export class TongxinProvider {
    public commentStatus:Comment = {
        showStatus:false,
        commentId:0
    };

    constructor() {
        console.log('Hello TongxinProvider Provider');
    }
    private Source=new Subject<any>();
    public Status$=this.Source.asObservable();
    // 添加评论组件通信
    public comment(id) {
        this.commentStatus.showStatus = !this.commentStatus.showStatus;
        this.commentStatus.commentId = id;
       this.Source.next(this.commentStatus);
    }
}

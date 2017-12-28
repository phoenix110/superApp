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
export class Sku{
    skuInfo:{}
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
    public skuList:Sku = {
        skuInfo:{}
    };
    constructor(
    ) {
        console.log('Hello TongxinProvider Provider');
    }
    private Comment=new Subject<any>();
    public obComment=this.Comment.asObservable();
    private Circle=new Subject<any>();
    public obCircle=this.Circle.asObservable();
    private Sku=new Subject<any>();
    public obSku=this.Sku.asObservable();
    // // 圈子添加评论组件间通信
    public CircleComment(data) {
        console.log(data)
        this.commentStatus.showStatus = !this.commentStatus.showStatus;
        this.commentStatus.commentData = data;
       this.Comment.next(this.commentStatus);
    }
    // // 个人中心发布页（完成组件和编辑组件）通信
    public pubCircle(data){
        console.log(data)
        this.publish.circleData = data;
        this.Circle.next(this.publish.circleData);
    }
    // 商品详情页商品规格选择与购买组件交互
    public skuBuy(data){
        this.skuList.skuInfo = data;
        this.Sku.next(this.skuList.skuInfo);
    }

}

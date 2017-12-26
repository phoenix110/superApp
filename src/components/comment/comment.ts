import { Component, Input } from '@angular/core';
import { NavController } from "ionic-angular";

// 导入自定义服务
import { HttpProvider } from "../../providers/http";
import { PopProvider } from "../../providers/pop";
// 导入组件通信服务
import { TongxinProvider } from "../../providers/tongxin";
import {PublishProvider} from "../../providers/publish";

/**
 * Generated class for the CommentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'comment',
  templateUrl: 'comment.html'
})
export class CommentComponent {
  text: string;
  @Input() commentList:Array<object> = [];

  constructor(
      public navCtrl:NavController,
      public Http:HttpProvider,
      public Pop:PopProvider,
      public TongXin:TongxinProvider,
      public publish:PublishProvider
      ) {
    console.log('Hello CommentComponent Component');
    this.text = 'Hello World';
    console.log(this.commentList)
  }
  // 跳转至我的世界详情页
    public toWorld(id){
        this.navCtrl.push("MypagePage",{id:id});
    }
    // 点赞功能
    public dianZan(index,id){
        this.publish.dianZan(id).subscribe(res=>{
            if(res === 'toLogin'){
                this.navCtrl.push("LoginPage");
                return false;
            }
            this.Pop.toast(res.message);
            this.commentList[index]['is_zan'] = !this.commentList[index]['is_zan'];
        });
    }
    // 发表评论
    public addComment(index){
        this.TongXin.CircleComment(this.commentList[index]);
    }
}

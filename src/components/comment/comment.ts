import { Component, Input } from '@angular/core';
import { NavController } from "ionic-angular";

// 导入自定义服务
import { HttpProvider } from "../../providers/http";
import { PopProvider } from "../../providers/pop";
// 导入组件通信服务
import { TongxinProvider } from "../../providers/tongxin";

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
      public TongXin:TongxinProvider
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
    public dianZan(index){
        this.commentList[index]['is_zan'] = !this.commentList[index]['is_zan'];
      //   this.Http.post(index).subscribe(res=>{
      //     this.Pop.toast(res.msg);
      //     if(res.code == 0){
      //         this.commentList[index]['is_zan'] = true;
      //     }
      // })
    }
    // 发表评论
    public addComment(id){
        this.TongXin.comment(id);
    }
}

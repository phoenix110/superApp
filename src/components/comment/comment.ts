import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";

// 导入自定义服务
import {HttpProvider} from "../../providers/http";
import {PopProvider} from "../../providers/pop";
// 导入组件通信服务
import {TongxinProvider} from "../../providers/tongxin";
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
    @Input() commentList: Array<object> = [];
    @Input() type: string = "";
    constructor(public navCtrl: NavController,
                public Http: HttpProvider,
                public Pop: PopProvider,
                public TongXin: TongxinProvider,
                public publish: PublishProvider) {
    }

    // 跳转至我的世界详情页
    public toWorld(id) {
        this.navCtrl.push("MypagePage", {id: id});
    }

    // 点赞功能
    public dianZan(index, id) {
        this.publish.dianZan(id).subscribe(res => {
            if (res === 'toLogin') {
                this.navCtrl.push("LoginPage");
                return false;
            }
            this.Pop.toast(res.message);
            let commentList:object = this.commentList[index];
            let likeList: Array<object> = this.commentList[index]['like_list'];
            commentList['is_like'] = !commentList['is_like'];
            // 点赞列表不为空时
            if(likeList.length > 0){
                // 点赞状态已取反，true的时候代表点赞成功，以前未点赞
                if (commentList['is_like']) {
                    likeList.unshift(res.data);
                }else{
                    likeList.forEach((item,index,arr) => {
                        item['uid'] == res.data.uid ? likeList.splice(index, 1) : '';
                    })
                }
            }else{
                likeList.unshift(res.data);
            }
        });
    }

    // 发表评论
    public addComment(index) {
        this.Http.getToken().subscribe(res => {
            if (res === false) {
                this.navCtrl.push("LoginPage");
                return false;
            }
            this.TongXin.CircleComment(this.commentList[index]);
        });
    }
}

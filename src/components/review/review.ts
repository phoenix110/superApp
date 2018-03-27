import {Component, Input} from '@angular/core';
import {HttpProvider} from "../../providers/http";
import {TongxinProvider} from "../../providers/tongxin";
import {NavController} from "ionic-angular";
import {PublishProvider} from "../../providers/publish";
import {PopProvider} from "../../providers/pop";

/**
 * Generated class for the ReviewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'review',
    templateUrl: 'review.html'
})
export class ReviewComponent {

    text: string;
    @Input() commentList: object = {};
    constructor(
        public Http:HttpProvider,
        public TongXin:TongxinProvider,
        public Publish:PublishProvider,
        public Pop:PopProvider,
        public navCtrl:NavController) {
        console.log('Hello ReviewComponent Component');
        this.text = 'Hello World';
    }
    // 点赞功能
    public dianZan(id) {
        this.Publish.dianZan(id).subscribe(res => {
            if (res === 'toLogin') {
                this.navCtrl.push("LoginPage");
                return false;
            }
            this.Pop.toast(res.message);
            let commentList:object = this.commentList;
            let likeList: Array<object> = this.commentList['like_list'];
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
            this.TongXin.CircleComment(this.commentList);
        });
    }
}

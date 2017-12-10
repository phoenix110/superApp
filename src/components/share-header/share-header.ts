import {Component, Input, Output} from '@angular/core';
import {EventEmitter} from "@angular/core";
import { NavController, NavParams} from "ionic-angular";
import { PopProvider } from "../../providers/pop";

/**
 * Generated class for the ShareHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'share-header',
    templateUrl: 'share-header.html'
})
export class ShareHeaderComponent {
    @Input() headerTitle: string = '';
    @Input() shareLink: string = '';
    @Input() commentPage: string = '';
    @Input() cart: string = '';
    @Input() shareGood: string = '';
    @Input() collect: string = '';
    @Input() concern: string = '';
    @Input() buy: string = '';
    @Input() goodId: number = 0;
    @Input() all: string = '';
    //声明事件发射器
    @Output() checkEmitter = new EventEmitter<boolean>();
    text: string;
    private isLogin:boolean = false;
    constructor(public Pop:PopProvider,
                public navCtrl:NavController,
                public navParams:NavParams) {
        console.log('Hello ShareHeaderComponent Component');
        this.text = 'Hello World';
    }

    // 点击分享
    public share() {
        console.log("您已点击了分享按钮！");
    }

    // 点击评论
    public comment() {
        console.log("您点击了评论按钮！")
    }

    // 打开性别选择框
    public sexAlert() {
        this.checkEmitter.emit(true);
    }

    // 点击购买商品
    public buyGood(id) {
        if(!this.isLogin){
            let options:Object = {
                title:"确认登录"
            };
            this.Pop.confirm(options).subscribe(data=>{
                if(data['is_login']){
                    this.navCtrl.push("OrderDetailPage",{id:id});
                }
            });
        }
    }

    // 点击添加购物车
    public addCart() {
        if(!this.isLogin){
            let options:Object = {
                title:"确认登录"
            };
            this.Pop.confirm(options).subscribe(data=>{
                if(data['is_login']){
                    console.log('去登陆');
                }
            });
        }
    }

    // 点击分享
    public addShare() {
        if(!this.isLogin){
            let options:Object = {
                title:"确认登录"
            };
            this.Pop.confirm(options).subscribe(data=>{
                if(data['is_login']){
                    console.log('去登陆');
                }
            });
        }
    }

    // 点击收藏
    public addCollect() {
        if(!this.isLogin){
            let options:Object = {
                title:"确认登录"
            };
            this.Pop.confirm(options).subscribe(data=>{
                if(data['is_login']){
                    console.log('去登陆');
                }
            });
        }
    }


}

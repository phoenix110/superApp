import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from "@angular/core";
import { NavController, NavParams} from "ionic-angular";
import { PopProvider } from "../../providers/pop";
import {TongxinProvider} from "../../providers/tongxin";
import {GoodsProvider} from "../../providers/goods";

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
export class ShareHeaderComponent implements OnInit{
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
    private isLogin:boolean = false;
    public goodSku:Object = {};
    public cartStatus:boolean = false;
    public collectStatus:boolean = false;
    public shareStatus:boolean = false;
    constructor(public Pop:PopProvider,
                public navCtrl:NavController,
                public navParams:NavParams,
                public TongXin:TongxinProvider,
                public Goods:GoodsProvider) {
        console.log('Hello ShareHeaderComponent Component');
    }
    ngOnInit(): void {
        this.TongXin.obSku.subscribe(res=>{
            this.goodSku  = res;
        })
    }
    // 点击分享
    public shareArticle() {
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
    public buyGood() {
        let params = {};
        if(this.goodSku['sku_list'] != ''){
            let skuIndex = this.goodSku['skuIndex'];
            params = {
                id:this.goodSku['id'],
                sku_key:skuIndex,
                sku_desc:this.goodSku['sku_list'][skuIndex]['filed_1'] + '-' + this.goodSku['sku_list'][skuIndex]['filed_2'],
                num:this.goodSku['sku_list'][skuIndex]['num'],
            };
        }else{
            params = {
                id:this.goodSku['id'],
                sku_key:"",
                sku_desc:"",
                num:this.goodSku['num']
            };
        }

        this.Goods.goodsBuy(params).subscribe(res =>{
            if(res === "toLogin"){
                this.navCtrl.push("LoginPage");
                return false;
            }
            let goodSku = JSON.stringify(params);
            console.log(goodSku)
            this.navCtrl.push("OrderDetailPage",{goodSku:params});
        });
    }

    // 点击添加购物车
    public addCart() {
        let params = {};
        if(this.goodSku['sku_list'] != ''){
            let skuIndex = this.goodSku['skuIndex'];
            params = {
                id:this.goodSku['id'],
                sku_key:skuIndex,
                sku_desc:this.goodSku['sku_list'][skuIndex]['filed_1'] + '-' + this.goodSku['sku_list'][skuIndex]['filed_2'],
                num:this.goodSku['sku_list'][skuIndex]['num'],
            };
        }else{
            params = {
                id:this.goodSku['id'],
                sku_key:"",
                sku_desc:"",
                num:this.goodSku['num']
            };
        }
        this.Goods.goodsAddCart(params).subscribe(res=>{
            if(res === "toLogin"){
                this.navCtrl.push("LoginPage");
                return false;
            }
            this.Pop.toast(res.message);
            this.cartStatus = true;
        });
    }

    // 点击分享
    public shareGoods() {
        if(!this.isLogin){
            this.Pop.confirm().subscribe(data=>{
                if(data['is_login']){
                    console.log('去登陆');
                }
            });
        }
    }

    // 点击收藏
    public addCollect() {
        if(!this.isLogin){
            this.Pop.confirm().subscribe(data=>{
                if(data['is_login']){
                    console.log('去登陆');
                }
            });
        }
        this.collectStatus = true;
    }


}

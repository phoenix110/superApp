import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {PopProvider} from "../../providers/pop";
import {GoodsProvider} from "../../providers/goods";


/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-cart',
    templateUrl: 'cart.html',
})
export class CartPage {
    public cartList:Array<object> = [
        {
            sid:1,
            name:"花鹿社",
            icon:"./assets/images/goods/shouji01.jpg",
            kaiguan:true,
            status:false,
            totalFee:200,
            selectNum:0,
            edit:false,
            goods:[
                {
                    id:1,
                    thumb:"./assets/images/goods/shouji01.jpg",
                    title:"爱敬气垫爱敬气垫爱敬气垫爱敬气垫爱敬气垫爱敬气垫",
                    sku:"白色-32寸",
                    price:2500,
                    num:2,
                    status:true,
                    total:5
                },
                {
                    id:2,
                    thumb:"./assets/images/goods/shouji01.jpg",
                    title:"爱敬气垫爱敬气垫爱敬气垫爱敬气垫爱敬气垫爱敬气垫",
                    sku:"白色-32寸",
                    price:2500,
                    num:2,
                    status:true,
                    total:5
                }
            ]
        },
        {
            sid:2,
            name:"超G名片",
            icon:"./assets/images/goods/shouji02.jpg",
            kaiguan:true,
            status:false,
            totalFee:300,
            selectNum:0,
            edit:false,
            goods:[
                {
                    id:2,
                    thumb:"./assets/images/goods/shouji02.jpg",
                    title:"爱咖啡",
                    sku:"红色-20寸",
                    price:1000,
                    num:1,
                    status:false,
                    total:3
                }
            ]
        }
    ];
    public uid = "";
    public ids:Array<string> = [];
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public User:UserProvider,
        public Pop:PopProvider,
        public Goods:GoodsProvider) {
        this.uid = this.navParams.get("uid");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CartPage');
        this.getCartList();
    }

    // 购物车列表数据
    public getCartList(){
        console.log(1111)
        this.User.getCartData().subscribe(res =>{
            if(res === "toLogin"){
                this.navCtrl.push("LoginPage");
                return false;
            }
            this.Pop.toast(res.message);
            console.log(res.data)
            res.data.forEach((shop,index,arr) => {
                shop.kaiguan = true;
                shop.status = false;
                shop.kaiguan = true;
                shop.selectNum = 0;
                shop.totalFee = 0;
                shop.edit = false;
                shop.carts.forEach((good,index,arr) => {
                    good.status = false;
                })
            });
            this.cartList = res.data;
            this.allChooseInit();

        });
    }
    // 购物车编辑
    public cartEdit(s){
        let shop = this.cartList[s];
        shop['edit'] = !shop['edit'];
    }
    // 初始化全选按钮的选中状态
    public allChooseInit(){
        this.cartList.forEach((shop,index,arr) =>{
            this.isAllChoose(shop);
            shop['kaiguan'] == true ? shop['status'] = true : shop['status'] = false;
        })
    }
    // 商品单选按钮
    public singleChoose(s,g){
        let shopList = this.cartList;
        let goodsList = shopList[s]['carts'];
        shopList[s]['kaiguan'] = true;
        goodsList[g]['status'] = !goodsList[g]['status'];
        this.isAllChoose(shopList[s]);
        shopList[s]['kaiguan'] == true ? shopList[s]['status'] = true : shopList[s]['status'] = false;
    }
    // 多选按钮
    public allChoose(s){
        let shop = this.cartList[s];
        let goodsList = this.cartList[s]['carts'];
        shop['totalFee'] = 0;
        shop['selectNum'] = 0;
        shop['status'] = !shop['status'];
        goodsList.forEach((item,index,arr)=>{
            item['status'] = shop['status'];

            shop['status'] == true ? shop['totalFee'] += item['sale_price'] * item['buy_num'] : shop['totalFee'] = 0;
            shop['status'] == true ? shop['selectNum'] ++ : shop['selectNum'] = 0;
        });
    }
    // 当前店铺商品均选中时，自动选中全选按钮
    public isAllChoose(shop){
        this.ids = [];
        shop['selectNum'] = 0;
        shop['totalFee'] = 0;
        shop['carts'].forEach((good,index,arr)=>{
            if(!good.status){
                shop['kaiguan'] = false;
                return false;
            }
            shop['totalFee'] += good['sale_price'] * good['buy_num'];
            shop['selectNum'] ++;
            this.ids.push(good.id);
        });
    }
    // 删除店铺中的某一商品
    public delGood(s,g){
        let shopList = this.cartList;
        shopList[s]['carts'].splice(g,1);
        this.isAllChoose(shopList[s]);
        if(shopList[s]['carts'].length <= 0){
            shopList.splice(s,1);
        }
    }
    // 去结算
    public toPay(s){
        let shopList = this.cartList;
        shopList[s]['totalFee'] = 0;
        this.isAllChoose(shopList[s]);
        let ids = this.ids.toString();
        let params = {
            // id:shopList[s]['id'],
            ids:ids,

        };
        this.Goods.goodsBuy(params,"cart").subscribe(res =>{
            if(res === "toLogin"){
                this.navCtrl.push("LoginPage");
                return false;
            }
            this.navCtrl.push("OrderDetailPage",{goodSku:params,type:"cart"})
        });
    }
}

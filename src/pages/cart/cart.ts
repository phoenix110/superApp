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
    public cartList:Array<object> = [];
    public uid = "";
    public ids:Array<string> = [];
    public payStatus:boolean = false;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public User:UserProvider,
        public Pop:PopProvider,
        public Goods:GoodsProvider) {
        this.uid = this.navParams.get("uid");
    }
    ionViewWillEnter(){
        this.getCartList();
    }
    ionViewDidLoad() {

    }

    // 购物车列表数据
    public getCartList(){
        this.User.getCartData().subscribe(res =>{
            if(res !== false){
                this.Pop.toast(res.message);
                res.data.forEach((shop,index,arr) => {
                    shop.kaiguan = true;
                    shop.status = false;
                    shop.kaiguan = true;
                    shop.selectNum = 0;
                    shop.totalFee = 0;
                    shop.edit = false;
                    shop.carts.forEach((good,index,arr) => {
                        good.status = false;
                        good.stockNum = good.total;
                    })
                });
                this.cartList = res.data;
                this.allChooseInit();
            }
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
        this.payStatus = false;
        goodsList[g]['status'] = !goodsList[g]['status'];
        this.isAllChoose(shopList[s]);
        shopList[s]['kaiguan'] == true ? shopList[s]['status'] = true : shopList[s]['status'] = false;
        // 一个商品被选中，则打开支付按钮
        goodsList.forEach((good,index,arr)=>{
            if(good['status']){
                this.payStatus = true;
                return false;
            }
        });
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
            this.payStatus = shop['selectNum'] > 0;
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
        let id = shopList[s]['carts'][g]['id'];
        this.Goods.delCartGoods(id).subscribe(res => {
            if(res !== false){
                shopList[s]['carts'].splice(g,1);
                this.isAllChoose(shopList[s]);
                if(shopList[s]['carts'].length <= 0){
                    shopList.splice(s,1);
                }
            }
        })
    }
    // 增加商品数量
    public upOrderNum(s,g){
        let goods = this.cartList[s]['carts'][g];
        let stockNum = parseInt(goods['stockNum']);
        let buyNum = parseInt(goods['buy_num']) + 1;
        if(buyNum > stockNum){
            this.Pop.toast("已打商品最大库存量！");
            return false;
        }
        goods['buy_num'] = buyNum;
        let params = {
            cartId:goods['id'],
            buyNum:buyNum
        };
        this.Goods.editCartGoods(params).subscribe(res =>{
            if(res !== false){
                if(res.code !== 0){
                    goods['buy_num'] = goods['buy_num'] - 1;
                    return false;
                }
                this.Pop.toast(res.message);
            }
        });
    }
    // 减少商品数量
    public downOrderNum(s,g){
        let goods = this.cartList[s]['carts'][g];
        let buyNum = parseInt(goods['buy_num']);
        if(buyNum <= 1){
            this.Pop.toast("不能再少了哟！");
            return false;
        }
        goods['buy_num'] = buyNum - 1;
        let params = {
            cartId:goods['id'],
            buyNum:buyNum
        };
        this.Goods.editCartGoods(params).subscribe(res =>{
            if(res !== false){
                if(res.code !== 0){
                    goods['buy_num'] = goods['buy_num'] + 1;
                    return false;
                }
                this.Pop.toast(res.message);
            }
        });
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
            if(res !== false){
                this.navCtrl.push("OrderDetailPage",{goodSku:params,type:"cart"})
            }
        });
    }
}

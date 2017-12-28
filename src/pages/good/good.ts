import {Component} from '@angular/core';
import {NavController, NavParams, IonicPage} from 'ionic-angular';
import {GoodProvider} from "../../providers/good";
import {PopProvider} from "../../providers/pop";

/**
 * Generated class for the GoodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    segment: "good/:id",
})
@Component({
    selector: 'page-good',
    templateUrl: 'good.html',
})
export class GoodPage {
    public goodDetail: Object = {};
    public loginStatus: false;
    public skuInfo: Object = {
        color: ['黑色', '白色', '红色'],
        size: [25, 26, 27, 28, 29],
        thumb: "./assets/images/share.jpg",
        price: 499,
        stock: 5,
        num: 1
    };

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public Good:GoodProvider,
        public Pop:PopProvider)
    {
        this.goodsData();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad GoodPage');
    }

    // 请求商品详情页数据
    public goodsData() {
        let id = this.navParams.get("id");
        console.log(id)
        this.Good.getGoodDetail(id).subscribe(res => {
            if(res.code == 0){
                this.goodDetail = res.data;
                return false;
            }
            this.Pop.toast(res.message);
        });
    }

    // 去评论
    public toTalk() {
        if (this.loginStatus) {
            // 跳转至商品评论页面
        } else {

        }
    }
}

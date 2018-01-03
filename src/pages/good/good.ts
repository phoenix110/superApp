import {Component} from '@angular/core';
import {NavController, NavParams, IonicPage} from 'ionic-angular';
import {GoodsProvider} from "../../providers/goods";
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
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public Goods:GoodsProvider,
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
        this.Goods.getGoodDetail(id).subscribe(res => {
            if(res.code == 0){
                for(let key in res.data['sku_list']){
                    res.data['sku_list'][key].num = 1;
                    res.data['sku_list'][key].constTotal = res.data['sku_list'][key]['total'];
                }
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

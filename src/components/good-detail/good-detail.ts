import {Component, Input, ViewChild, OnChanges} from '@angular/core';
import {Slides, NavController} from 'ionic-angular';
import {TongxinProvider} from "../../providers/tongxin";
import {ValidateProvider} from "../../providers/validate";
import {PopProvider} from "../../providers/pop";

/**
 * Generated class for the GoodStyleComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector: 'good-detail',
    templateUrl: 'good-detail.html'
})

export class GoodDetailComponent implements OnChanges {
    @Input() goodInfo: Object = {};
    @ViewChild(Slides) slides: Slides;
    public colorSku: number = 0;
    public sizeSku: number = 0;

    constructor(public navCtrl: NavController,
                public TongXin: TongxinProvider,
                public Validate: ValidateProvider,
                public Pop: PopProvider) {
        console.log('Hello GoodSkuComponent Component');
    }

    ngOnChanges() {
        this.goodInfo['skuIndex'] = this.colorSku + '_' + this.sizeSku;
        this.changeSku();
    }

    // 跳转至产品（秀）图片详情页
    public goodPics(id) {
        this.navCtrl.push("GoodImgsPage", {id: id});
    }

    // 更改发布商品规格信息
    public changeSku() {
        this.TongXin.skuBuy(this.goodInfo);
        console.log(this.goodInfo)
    }

    // 规格一切换
    public setColorSku(index) {
        this.colorSku = index;
        this.goodInfo['skuIndex'] = this.colorSku + '_' + this.sizeSku;
    }

    // 规格二切换
    public setSizeSku(index) {
        this.sizeSku = index;
        this.goodInfo['skuIndex'] = this.colorSku + '_' + this.sizeSku;
    }

    // 增加商品数量
    public addGood() {
        if (this.goodInfo['sku_list'] != '') {
            let sku = this.colorSku + '_' + this.sizeSku;
            let skuOne = this.goodInfo['sku_list'][sku];
            if (skuOne['num'] >= skuOne['constTotal']) {
                this.Pop.toast("不能再多了！");
                return false;
            }
            skuOne['num']++;
            skuOne['total']--;
        } else {
            if (this.goodInfo['num'] >= this.goodInfo['totalNum']) {
                this.Pop.toast("不能再多了！");
                return false;
            }
            this.goodInfo['num']++;
            this.goodInfo['total']--;
        }

    }

    // 减少商品数量
    public descGood() {
        if (this.goodInfo['sku_list'] != '') {
            let sku = this.colorSku + '_' + this.sizeSku;
            let skuOne = this.goodInfo['sku_list'][sku];
            if (skuOne['num'] <= 1) {
                this.Pop.toast("不能再少了！");
                return false;
            }
            skuOne['num']--;
            skuOne['total']++;
        } else {
            if (this.goodInfo['num'] <= 1) {
                this.Pop.toast("不能再少了！");
                return false;
            }
            this.goodInfo['num'] --;
            this.goodInfo['total']++;
        }
    }
}

import {Component, Input, OnChanges} from '@angular/core';
import {TongxinProvider} from "../../providers/tongxin";
import {ValidateProvider} from "../../providers/validate";
import {PopProvider} from "../../providers/pop";

/**
 * Generated class for the GoodSkuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'good-sku',
    templateUrl: 'good-sku.html'
})
export class GoodSkuComponent implements OnChanges {
    @Input() skuInfo: object = {};
    public colorSku:number = 0;
    public sizeSku:number = 0;
    public goodNum:number = 0;
    constructor(public TongXin: TongxinProvider,
                public Validate: ValidateProvider,
                public Pop:PopProvider) {
        console.log('Hello GoodSkuComponent Component');
    }
    ngOnChanges(){
        this.goodNum = this.skuInfo['stock'];
        this.changeSku();
    }
    // 更改发布商品规格信息
    public changeSku() {
        this.TongXin.skuBuy(this.skuInfo);
    }
    // 规格一切换
    public setColorSku(index) {
        this.colorSku = index;
    }
    // 规格二切换
    public setSizeSku(index) {
        this.sizeSku = index;
    }
    // 增加商品数量
    public addGood(){
        console.log(this.goodNum)
        if(this.skuInfo['num'] >= this.goodNum){
            this.Pop.toast("不能再多了！");
            return false;
        }
        this.skuInfo['num'] ++;
        this.skuInfo['stock'] --;
    }
    // 减少商品数量
    public descGood(){
        if(this.skuInfo['num'] <= 1){
            this.Pop.toast("不能再少了！");
            return false;
        }
        this.skuInfo['num'] --;
        this.skuInfo['stock'] ++;
    }
}

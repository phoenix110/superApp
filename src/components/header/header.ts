import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NavController} from "ionic-angular";
import {HttpProvider} from "../../providers/http";
import {PopProvider} from "../../providers/pop";
import {PublishProvider} from "../../providers/publish";
import {ValidateProvider} from "../../providers/validate";
import {TongxinProvider} from "../../providers/tongxin";

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector: 'header',
    templateUrl: 'header.html'
})
export class HeaderComponent implements OnChanges {
    @Input() headerTitle: string;
    @Input() save: string;
    @Input() addAddress: string;
    @Input() publish;
    public pubData: any = {};

    constructor(public navCtrl: NavController,
                public Http: HttpProvider,
                public Pop: PopProvider,
                public Publish: PublishProvider,
                public Validate: ValidateProvider,
                public TongXin: TongxinProvider) {
        console.log('Hello HeaderComponent Component');
        this.getContent();
    }
    // 监听更新发布内容的变化
    ngOnChanges(changes: SimpleChanges) {

    }
    // 圈子发布内容
    public getContent(){
        this.TongXin.obCircle.subscribe(res => {
            console.log(res)
            this.pubData = res;
        });
    }
    // 跳转至新增收货地址页面
    public newAddress() {
        this.navCtrl.push("AddressAddPage");
    }

    // 保存当前页面信息
    public saveAddress() {
        this.navCtrl.pop();
    }

    //发表圈子
    public pushCircle() {
        let content = this.pubData['content'];
        this.Http.getToken().subscribe(res => {
            if (!this.Validate.trimBlank(content)) {
                this.Pop.toast("发布内容不能为空！")
                return false;
            }
            if (res === false) {
                this.navCtrl.push("LoginPage");
                return false;
            } else {
                this.pubData['token'] = res;
                this.publish.pubCircle(this.pubData).subscribe(res => {
                    this.Pop.toast(res.msg);
                    if (res.code == 0) {
                        this.navCtrl.pop();
                    } else if (res.code == -1) {
                        this.Pop.confirm().subscribe(res => {
                            if (res === false) {
                                this.navCtrl.push("LoginPage");
                            }
                        });
                    } else {
                        this.Pop.toast(res.msg);
                    }
                });
            }
        });

    }
}

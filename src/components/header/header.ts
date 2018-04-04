import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NavController,NavParams} from "ionic-angular";
import {HttpProvider} from "../../providers/http";
import {PopProvider} from "../../providers/pop";
import {PublishProvider} from "../../providers/publish";
import {ValidateProvider} from "../../providers/validate";
import {TongxinProvider} from "../../providers/tongxin";
import {GoodsProvider} from "../../providers/goods";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { APP_SERVE_URL} from "../../app/app.config";
import {AuthProvider} from "../../providers/auth";

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
    @Input() set: string;
    @Input() uid: number;
    @Input() addressInfo:object = {};
    @Input() publish;
    @Input() complain:string;
    @Input() juBao:string;
    @Input() complainInfo:object = {};
    public complainId:number;

    public pubData: any = {};
    public cityArr:Array<string> = [];
    constructor(public navCtrl: NavController,
                public navParams:NavParams,
                public Http: HttpProvider,
                public Pop: PopProvider,
                public Publish: PublishProvider,
                public Validate: ValidateProvider,
                public TongXin: TongxinProvider,
                public Goods:GoodsProvider,
                private transfer: FileTransfer,
                public Auth:AuthProvider) {
        console.log('Hello HeaderComponent Component');
        this.complainId = this.navParams.get("id");

        this.getContent();
    }
    public fileTransfer: FileTransferObject = this.transfer.create();
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

    // 保存新增或编辑地址页面信息
    public saveAddress() {
        let cityArr = document.getElementById("cities").innerText;
        let name = this.Validate.trimBlank(this.addressInfo['name']);
        let mobile = this.Validate.trimBlank(this.addressInfo['mobile']) && this.Validate.phone(this.addressInfo['mobile']);
        let address = this.Validate.trimBlank(this.addressInfo['area']);
        cityArr = this.Validate.trimBlank(cityArr);
        if(!name){
            this.Pop.toast("请填写收件人姓名");
            return false;
        }
        if(!mobile){
            this.Pop.toast("请填写正确的收件人手机号");
            return false;
        }

        if(cityArr == '省-市-区(县)'){
            this.Pop.toast("请选择所在地区");
            return false;
        }
        if(!address){
            this.Pop.toast("请填写收件人详细地址信息");
            return false;
        }
        this.cityArr = cityArr.split("-");
        this.addressInfo['province']  = this.cityArr[0];
        this.addressInfo['city']  = this.cityArr[1];
        this.addressInfo['district']  = this.cityArr[2];
        if(this.addressInfo['type'] === 'add'){
            this.Goods.addNewAddress(this.addressInfo).subscribe(res =>{
                if(res !== false){
                    this.Pop.toast(res.message);
                    this.navCtrl.pop();
                }

            });
        }else{
            this.Goods.editSaveAddress(this.addressInfo).subscribe(res =>{
                if(res !== false){
                    this.Pop.toast(res.message);
                    this.navCtrl.pop();
                }
            });
        }
        console.log(this.addressInfo);
        // this.navCtrl.pop();
    }

    //发表圈子
    public pushCircle() {
        // let formData = new FormData();
        let content = this.pubData['content'];
        let src = this.pubData['src'];
        let type = this.pubData['type'];
        console.log(this.pubData)
        if (!this.Validate.trimBlank(content)) {
            this.Pop.toast("发布内容不能为空！");
            return false;
        }
        if (!this.Validate.trimBlank(src)) {
            this.Pop.toast("请上传发布图片或视频！");
            return false;
        }
        if(type == 'picture'){
            this.Publish.pubCircle(this.pubData).subscribe( res => {
                if(res === 'toLogin'){
                    this.navCtrl.push("LoginPage");
                }
                this.Pop.toast(res.message);
                this.navCtrl.pop();
            })
        }else{
            this.Http.getToken().subscribe(token => {
                if (token === false) {
                    this.navCtrl.push("LoginPage");
                    return false;
                }
                this.pubData.token = token;
                this.uploadByTransfer(src, APP_SERVE_URL, this.pubData).then(res => {
                    let data = JSON.parse(res.response);
                    if (data['code'] == 0) {
                        // 接口请求成功返回接口数据
                        this.Pop.toast(data['message']);
                        this.navCtrl.pop();
                    } else if (data['code'] == -1) {
                        // 本地有token，后台验证登录过期，重新登录
                        this.Pop.confirm().subscribe(res => {
                            if (res === false) {
                                this.navCtrl.push("LoginPage");
                            }
                        });
                    } else {
                        // 其他情况弹出消息提示
                        this.Pop.toast(data['message']);
                    }
                    console.log(data)
                }).catch(err => {
                    console.log(err);
                });
            })
        }
    }
    // 视频文件上传
    public uploadByTransfer(fileUrl: string, url: string,data:object, options?: FileUploadOptions){
        options = {
            fileKey: 'file',
            fileName: fileUrl.substr(fileUrl.lastIndexOf('/')+1),
            mimeType:"video/*",
            params:{
                op:"push_circle",
                content:data['content'],
                token:data['token']
            }
        };
        return this.fileTransfer.upload(fileUrl, url, options);
    }
    // 个人信息设置
    public userSet(){
        this.navCtrl.push("SetPage",{uid:this.uid});
    }
    // 跳转至投诉页面
    public toComplain(){
        this.Auth.checkLogin().subscribe( res => {
            let complainId = this.complainId;
            if(res !== false){
                this.navCtrl.push("ComplainPage",{id:complainId});
            }
        });
    }
    // 发起投诉
    public sendComplian(){
        console.log(this.complainInfo);
        let setReason = this.Validate.trimBlank(this.complainInfo['setReason']) || "";
        let otherReason = this.Validate.trimBlank(this.complainInfo['otherReason']) || "";
        if( !setReason  && !otherReason){
            this.Pop.toast("投诉建议不能为空！");
            return false;
        }
        this.Publish.sendComplian(this.complainInfo).subscribe( res => {
            if(res !== false){
                this.Pop.toast(res.message);
            }
        });
    }
}

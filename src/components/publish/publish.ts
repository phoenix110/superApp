import {Component, OnChanges, ChangeDetectorRef} from '@angular/core';
import {ActionSheetController, NavController, NavParams} from "ionic-angular";
import {NativeProvider} from "../../providers/native";
import {TongxinProvider} from "../../providers/tongxin";

/**
 * Generated class for the PublishComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'publish',
    templateUrl: 'publish.html'
})
export class PublishComponent implements OnChanges {

    public pubData: object = {
        content: "",
        src: ""
    };
    public hasPic: boolean = false;
    public hasVideo: boolean = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public native: NativeProvider,
                public changeDetectorRef:ChangeDetectorRef,
                private actionSheetCtrl: ActionSheetController,
                public TongXin:TongxinProvider) {

        this.sendPublishCont();
    }

    ngOnChanges() {
        this.sendPublishCont();
    }
    // 向TongXin.ts发送将要发布的内容
    public sendPublishCont(){
        this.TongXin.pubCircle(this.pubData);
    }
    //上传文件
    public uploadPics() {

        let actionSheet = this.actionSheetCtrl.create({
            title: '请选择图片',
            buttons: [
                {
                    text: '相机',
                    role: 'destructive',
                    handler: () => {
                        this.native.getPictureByCamera().subscribe(res => {
                            this.hasPic = true;
                            this.pubData['src'] = res;
                            console.log(res)

                        })
                    }
                }, {
                    text: '图库',
                    handler: () => {
                        this.native.getMultiplePicture({}).subscribe(res => {
                            this.hasPic = true;
                            this.pubData['src'] = res;
                            this.changeDetectorRef.detectChanges();
                            console.log(res)

                        })
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {

                    }
                }
            ]
        });
        actionSheet.present();
    }

    //上传视频
    public uploadVideo() {

        let actionSheet = this.actionSheetCtrl.create({
            title: '请选择视频',
            buttons: [
                {
                    text: '视频',
                    role: 'destructive',
                    handler: () => {
                        let options = {
                            sourceType: 0,
                            mediaType: 1,
                            destinationType:1
                        };
                        this.native.getPictureByCamera(options).subscribe(res => {
                            this.hasVideo = true;
                            this.pubData['src'] = res;
                            console.log(res)
                        })
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {

                    }
                }
            ]
        });
        actionSheet.present();
    }

    // 删除已添加的图片或视频文件
    public closeBtn() {
        this.hasVideo = false;
        this.hasPic = false;
        this.pubData['src'] = "";
    }

}

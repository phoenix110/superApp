import { Injectable } from '@angular/core';
import { Platform} from "ionic-angular";

// 注入本地Native功能调用插件
import { Camera , CameraOptions } from "@ionic-native/camera";
import { ImagePicker } from "@ionic-native/image-picker";
import { AppVersion} from "@ionic-native/app-version";
import { File, FileEntry } from "@ionic-native/file";
// import { Network} from "@ionic-native/network";

// 注入rxjs服务模块
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

// 注入自定义服务
import { PopProvider } from "./pop";
import { LoggerProvider } from "./logger";
import { IMAGE_SIZE, QUALITY_SIZE } from "./constant";

/*
  Generated class for the NativeServieProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NativeProvider {
    constructor(
        public platform:Platform,
        // public network:Network,
        private camera:Camera,
        private imagePicker:ImagePicker,
        private appVersion:AppVersion,
        private Pop:PopProvider,
        private logger:LoggerProvider,
        private file:File
    ) {
        console.log('Hello NativeServieProvider Provider');
    }
    /**
     * 是否真机环境
     */
    isMobile(): boolean {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    }

    /**
     * 是否android真机环境
     */
    isAndroid(): boolean {
        return this.isMobile() && this.platform.is('android');
    }

    /**
     * 是否ios真机环境
     */
    isIos(): boolean {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    }
    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    getNetworkType(): string {
        if (!this.isMobile()) {
            return 'wifi';
        }
        // return this.network.type;
    }
    /**
     * 判断是否有网络
     */
    // isConnecting(): boolean {
    //     return this.getNetworkType() != 'none';
    // }
    /**
     * 使用cordova-plugin-camera获取照片
     * @param options
     */
    getPicture(options: CameraOptions = {}): Observable<string> {
        let ops: CameraOptions = Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,//图片来源,CAMERA:拍照,PHOTOLIBRARY:相册
            destinationType: this.camera.DestinationType.DATA_URL,//默认返回base64字符串,DATA_URL:base64   FILE_URI:图片路径
            quality: QUALITY_SIZE,//图像质量，范围为0 - 100
            allowEdit: false,//选择图片前是否允许编辑
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: IMAGE_SIZE,//缩放图像的宽度（像素）
            targetHeight: IMAGE_SIZE,//缩放图像的高度（像素）
            saveToPhotoAlbum: false,//是否保存到相册
            correctOrientation: true//设置摄像机拍摄的图像是否为正确的方向
        }, options);
        return Observable.create(observer => {
            this.camera.getPicture(ops).then((imgData: string) => {
                if (ops.destinationType === this.camera.DestinationType.DATA_URL) {
                    imgData = 'data:image/jpg;base64,' + imgData;
                    observer.next(imgData);
                } else {
                    observer.next(imgData);
                }
            }).catch(err => {
                if (err == 20) {
                    this.Pop.alert('没有权限,请在设置中开启权限');
                    return;
                }
                if (String(err).indexOf('cancel') != -1) {
                    return;
                }
                this.logger.log(err, '使用cordova-plugin-camera获取照片失败');
                this.Pop.alert('获取照片失败');
            });
        });
    };

    /**
     * 通过拍照获取照片
     * @param options
     */
    getPictureByCamera(options: CameraOptions = {}): Observable<string> {
        let ops: CameraOptions = Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL//DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
        }, options);
        console.log(ops)
        return this.getPicture(ops);
    };

    /**
     * 通过图库获取照片
     * @param options
     */
    getPictureByPhotoLibrary(options: CameraOptions = {}): Observable<string> {
        let ops: CameraOptions = Object.assign({
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL//DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
        }, options);
        return this.getPicture(ops);
    };

    /**
     * 通过图库选择多图
     * @param options
     */
    getMultiplePicture(options = {}): Observable<any> {
        let that = this;
        let ops = Object.assign({
            maximumImagesCount: 6,
            width: IMAGE_SIZE,//缩放图像的宽度（像素）
            height: IMAGE_SIZE,//缩放图像的高度（像素）
            quality: QUALITY_SIZE//图像质量，范围为0 - 100
        }, options);
        return Observable.create(observer => {
            this.imagePicker.getPictures(ops).then(filesUrl => {
                let destinationType = options['destinationType'] || 0;//0:base64字符串,1:图片url
                if (destinationType === 1) {
                    observer.next(filesUrl);
                } else {
                    let imgBase64s = [];//base64字符串数组
                    for (let fileUrl of filesUrl) {
                        that.convertImgToBase64(fileUrl).subscribe(base64 => {
                            imgBase64s.push(base64);
                            if (imgBase64s.length === filesUrl.length) {
                                observer.next(imgBase64s);
                            }
                        })
                    }
                }
            }) .catch(err => {
                this.logger.log(err, '通过图库选择多图失败');
                this.Pop.alert('获取照片失败');
            });
        });
    };

    /**
     * 根据图片绝对路径转化为base64字符串
     * @param path 绝对路径
     */
    convertImgToBase64(path: string): Observable<string> {
        return Observable.create(observer => {
            this.file.resolveLocalFilesystemUrl(path).then((fileEnter: FileEntry) => {
                fileEnter.file(file => {
                    let reader = new FileReader();
                    reader.onloadend = function (e) {
                        observer.next(this.result);
                    };
                    reader.readAsDataURL(file);
                });
            }).catch(err => {
                this.logger.log(err, '根据图片绝对路径转化为base64字符串失败');
            });
        });
    }

    /**
     * 获得app版本号,如0.01
     * @description  对应/config.xml中version的值
     */
    getVersionNumber(): Observable<string> {
        return Observable.create(observer => {
            this.appVersion.getVersionNumber().then((value: string) => {
                observer.next(value);
            }).catch(err => {
                this.logger.log(err, '获得app版本号失败');
            });
        });
    }
}
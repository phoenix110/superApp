import {NativeProvider} from "./native";
import {ActionSheetController, ModalController} from "ionic-angular";
import {Injectable} from "@angular/core";
// 列表图片上传预览插件
import { GalleryModal } from 'ionic-gallery-modal';

@Injectable()
export class CommonProvider{
    constructor(
        public native:NativeProvider,
        public modalCtrl:ModalController,
        public actionSheetCtrl:ActionSheetController,
    ){

    }
    // 图片上传
    public uploadPicture() {
        let actionSheet = this.actionSheetCtrl.create({
            title: '请选择头像',
            buttons: [
                {
                    text: '相机',
                    role: 'destructive',
                    handler: () => {
                        this.native.getPictureByCamera().subscribe(picUrl => {
                            // this.commentData['comment'][0]['pictures'].push(picUrl);
                            return picUrl;
                        })
                    }
                }, {
                    text: '图库',
                    handler: () => {
                        this.native.getMultiplePicture().subscribe(picUrl => {
                            // let oldPics = this.commentData['comment'][0]['pictures'];
                            // oldPics.push.apply(oldPics,picUrl);
                            console.log(picUrl)
                            return picUrl;
                        })
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                        console.log('选择头像已取消');
                        return false;
                    }
                }
            ]
        });
        actionSheet.present();
    }
    // (单图)多图预览model
    public photoViews(photoData,key = ''){
        let photos:Array<object> = [];
        let obj = {};
        // 单张图片时（photoData为一个图片地址字符串且不为空）
        if(photoData && typeof(photoData) == "string"){
            obj = {};
            obj['url'] = photoData;
            photos.push(obj);
        }
        console.log(photoData)

        // 多张图片时（photoData为图片地址字符串数组）
        if(photoData instanceof Array){
            console.log(photoData)
            photoData.forEach(function(item,index,array){
                obj = {};
                // photoData 为字符串数组时（即key不存在时）
                if(key == '' && item){
                    obj['url'] = item;
                    photos.push(obj);
                }
                // photoData 为对象数组时（即key存在时）
                console.log(item[key])
                if(key != '' && item[key]){
                    obj['url'] = item[key];
                    photos.push(obj);
                }
            });
        }
        let modal = this.modalCtrl.create(GalleryModal, {
            photos: photos,
            initialSlide: 0
        });
        modal.present();
    }

}
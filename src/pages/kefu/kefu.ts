import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the KefuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kefu',
  templateUrl: 'kefu.html',
})
export class KeFuPage {
  public keFu:Array<object> = [];
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public actionSheet:ActionSheetController,
      public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KefuPage');
    this.keFuData();
  }
  // 获取客服-用户评论数据
  public keFuData(){
    this.http.get("./assets/data.json").subscribe(data=>{
      this.keFu = data['keFu'];
    });
  }
  // 跳转至评论者详情
  public reviewerInfo(id){
    this.navCtrl.push("MyPage",{id:id});
  }
  // 追加评论
  public addAsk(id){
    let actionSheet = this.actionSheet.create({
        title: '编辑',
        buttons: [
            {
                text: '添加追问',
                role: 'destructive',
                handler: () => {
                    this.navCtrl.push("CommentPage",{id:id,type:"keFuAdd"})
                }
            },{
                text: '删除',
                role: 'destructive',
                handler: () => {

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
}

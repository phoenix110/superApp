import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
/**
 * Generated class for the LuckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-luck',
  templateUrl: 'luck.html',
})
export class LuckPage {
    public reviewerInfo:any;
    public reviewerArr:Array<object> = [];
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public platform:Platform,
      public actionSheetCtrl: ActionSheetController,
      public http:HttpClient
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LuckPage');
    this.reviewerData();
  }
    openActionSheet(type) {
        let actionSheet = this.actionSheetCtrl.create({
            title: '',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: '查看全部',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: () => {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: '只看男生',
                    icon: !this.platform.is('ios') ? 'md-male' : 'ios-male',
                    handler: () => {
                        console.log('Share clicked');
                    }
                },
                {
                    text: '只看女生',
                    icon: !this.platform.is('ios') ? 'md-female' : 'ios-female',
                    handler: () => {
                        console.log('Play clicked');
                    }
                },
                {
                    text: '取消',
                    role: 'cancel', // will always sort to be on the bottom
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        type == true ? actionSheet.present(): '';
    }
    // 评论者会员信息
    public reviewerData(){
        this.http.get("./assets/data.json").subscribe(data=>{
            this.reviewerInfo = data['luckPerson'];
            // 若返回数据是对象格式则处理成数组形式
            if(this.reviewerInfo instanceof Array){
                this.reviewerArr = this.reviewerInfo;
            }else{
                this.reviewerArr.push(this.reviewerInfo);
            }
            console.log(this.reviewerArr)
            console.log(this.reviewerInfo)
        });
    }
}

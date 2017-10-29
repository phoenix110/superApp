import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReviewerInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reviewer-info',
  templateUrl: 'reviewer-info.html',
})
export class ReviewerInfoPage {
public reviewerInfo:any = [];
public reviewerArr:Array<object> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewerInfoPage');
    this.reviewerData();
  }
  // 评论者会员信息
  public reviewerData(){
    this.http.get("/assets/data.json").subscribe(data=>{
        this.reviewerInfo = data['reviewerInfo'];
        // 若返回数据是对象格式则处理成数组形式
        if(this.reviewerInfo instanceof Object){
            this.reviewerArr.push(this.reviewerInfo);
        }else{
            this.reviewerArr = this.reviewerInfo;
        }
    });
  }
}

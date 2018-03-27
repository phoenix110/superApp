import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from "../../providers/common"
/**
 * Generated class for the ComplainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment:"complain/:id"
})
@Component({
  selector: 'page-complain',
  templateUrl: 'complain.html',
})
export class ComplainPage {
  public complainData:object = {
      checkIndex:-1,
      setReason:"",
      reasonArr:[
        "诈骗，欺骗，传销",
        "诈骗，欺骗，传销",
        "诈骗，欺骗，传销",
        "诈骗，欺骗，传销",
        "诈骗，欺骗，传销",
        "诈骗，欺骗，传销",
        "诈骗，欺骗，传销",
      ],
      otherReason:"",
      thumbs:[],
      circleId:-1
  };
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public Common:CommonProvider) {
      this.complainData['circleId'] = this.navParams.get("id");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplainPage');
  }
  // 选择默认投诉原因
  public setReason(index){
    this.complainData['checkIndex'] = index;
    this.complainData['setReason'] = this.complainData['reasonArr'][index];
  }
  // 上传投诉截图
  public complainPicture(){
    let picUrl:any = this.Common.uploadPicture();
    if(picUrl){
      if(typeof picUrl === "string"){
          this.complainData['thumbs'].push(picUrl);
      }else if(picUrl instanceof Array){
          this.complainData['thumbs'] = picUrl;
      }
    }
  }
}

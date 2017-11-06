import { Component , ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';


/**
 * Generated class for the MallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mall',
  templateUrl: 'mall.html',
})
export class MallPage {
    // @ViewChild("slidesParent") slidesParent:Slides;
    @ViewChild("slidesChild") slidesChild:Slides;
  public good:Array<object> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MallPage');
    this.mallData();

  }
  // 获取mall数据
  public mallData(){
    this.http.get("./assets/data.json").subscribe(data=>{
      this.good = data["mall"];
        this.initSlides();
    });
  }
  // 初始化slides轮播组件
    public initSlides(){
      console.log(this.slidesChild)
        this.slidesChild.direction = "vertical";
    }
}

import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the GroupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {
  public group:Array<object> = [];
  public colorArr:string[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
    this.groupData();
  }
  // 获取社群数据
  public groupData(){
      this.http.get("assets/data.json").subscribe(data=>{
        this.group = data['group'];
        this.getColorArr();
      });
  }
    // 给颜色数组赋值
    public getColorArr() {
        for (let i in this.group) {
            console.log(i);
            // 获取随机的颜色值
            let color = '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
            this.colorArr.push(color);
        }
    }
}

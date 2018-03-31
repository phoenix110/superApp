import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PublishProvider} from "../../providers/publish";

/**
 * Generated class for the RewardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment:"reward/:id"
})
@Component({
  selector: 'page-reward',
  templateUrl: 'reward.html',
})
export class RewardPage {
  public active:number = -1;
  public rewardOptions:Array<number> = [1,5,10,50,100,200];
  public rewardId:number;
  public payStatus:boolean = false;
  public rewardData:object = {};
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public Publish:PublishProvider) {
    this.rewardId = this.navParams.get("id");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RewardPage');
  }
  // 设置打赏金额
  public setReward (index){
    this.active = index;
  }
  // 确认打赏
  public confirmReward(){
    this.payStatus = true;
    let cash = this.rewardOptions[this.active];
    this.rewardData = {
      money:cash,
      id:this.rewardId
    };
  }
  // 接受子组件传递来的数据状态
  public changeStatus($event){
      this.payStatus = $event;
  }
}

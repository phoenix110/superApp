import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PublishProvider} from "../../providers/publish";

/**
 * Generated class for the RewardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reward',
  templateUrl: 'reward.html',
})
export class RewardPage {
  public active:number = -1;
  public rewardOptions:Array<number> = [1,5,10,50,100,200];
  public rewardId:number;
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
    let cash = this.rewardOptions[this.active];
    let options = {
      money:cash,
      id:this.rewardId
    };
    this.Publish.giveReward(options);
  }
}

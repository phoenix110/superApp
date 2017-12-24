import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { PopProvider } from "../../providers/pop";
import { HttpProvider } from "../../providers/http";
import {FindProvider} from "../../providers/find";

/**
 * Generated class for the MyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
    public circleData = {

    };
    public codeStatus = false;
    public active_index = 0;//当前激活的条件
    //筛选条件
    public types = [
        '最新',
        '头条',
        '热门',
        '红人',
        '关注'
    ];
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public http:HttpProvider,
      public storage:Storage,
      public pop:PopProvider,
      public find:FindProvider

  ) {


  }
  ionViewDidLoad() {
      this.getList(0,1);
  }

  //根据不同类型筛选不同的数据列表
    getListByType(type){
      this.active_index = type;
    }

    //跳转到toUserPage
    toUserPage(){
        this.checkLogin('UserPage');
    }

    //跳转到发表界面
    toPushPage(){
        this.checkLogin('PushPage');
    }

    //检查是否登录
    checkLogin(page,params = {}){
        this.http.getToken().subscribe(res =>{
            if(!res){
                this.navCtrl.push('LoginPage');
                return true;
            }
            this.navCtrl.push(page,params);
        });
    }

    public showQr(){
        this.codeStatus = true


    }
    public fadeOut(event){
        this.codeStatus = event;
    }

    public getList(type,page){
        let res = this.find.getCircleList(type,page).subscribe(res=>{
            if(res === false){
                this.navCtrl.push("LoginPage");
                return false;
            }
            console.log(res);
        })
    }

}

import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import {Tabs} from "ionic-angular";
import { PopProvider } from "../../providers/pop";
import { HttpProvider } from "../../providers/http";
import {TabsProvider} from "../../providers/tabs";

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
    //圈子数据
    public circleData = {
        'push_num':0,
        'member_num':0,
        'sum_credit2':0,
        'list':[]
    };
    @ViewChild("tabs") tabs:Tabs;
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
      public Tabs:TabsProvider

  ) {


  }


  ionViewDidLoad() {
      this.getData();
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
        this.codeStatus = true;
    }
    public fadeOut(event){
        this.codeStatus = event;
    }
    // 获取圈子列表数据
    public getData(type = 0,page = 1){
        this.storage.get('token').then((token)=>{
            this.Tabs.getMyCircleList(type,page,token).subscribe(res=>{
                if(res.code == 0){
                    this.circleData = res.data;
                    console.log(this.circleData)
                    return true;
                }
                this.pop.toast(res.message);
                if(res.code == '-1'){
                    this.navCtrl.push("LoginPage");
                }
            })
        });
    }

}

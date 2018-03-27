import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {NavController, NavParams, IonicPage, InfiniteScroll} from 'ionic-angular';
import {TabsProvider} from "../../providers/tabs";
import {PopProvider} from "../../providers/pop";

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
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public http:HttpClient,
      public Tabs:TabsProvider,
      public Pop:PopProvider) {
  }
    public page:number = 1;
  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
    this.groupData();
    this.getGroupList();
  }
  // 获取社群数据
  public groupData(){
      this.http.get("./assets/data.json").subscribe(data=>{
        this.group = data['group'];
        this.getColorArr();
        console.log(this.group)
      });
  }
  // 获取社群列表
    public getGroupList(){
      this.Tabs.getGroupList().subscribe( res => {
          if(res.code == 0){
              // this.group = res.data;
              console.log(res.data)
              return false;
          }
          this.Pop.toast(res.message);
      })
    }
    // 下拉刷新
    public doRefresh(evt){
        this.Tabs.getGroupList().subscribe(res =>{
            if(res.code == 0){
                // this.group = res.data;
                console.log(res.data)
                return false;
            }
            this.Pop.toast(res.message);
            evt.complete();
        })
    }
    // 上拉加载更多
    public loadMore(infiniteScroll: InfiniteScroll){
        this.page ++;
        this.Tabs.getGroupList(this.page).subscribe(res =>{
            if(res.data.list.length <= 0){
                infiniteScroll.enable(false);
                return false;
            }
            this.group.concat(res.data);
            infiniteScroll.complete();
        })
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
    // 跳转至社群聊天
    public toTalk(){
      this.navCtrl.push("ChatDetailPage");
    }
}

import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { Storage } from "@ionic/storage";
import {FindProvider} from "../../providers/find";
import {PopProvider} from "../../providers/pop";

/**
 * Generated class for the CirclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-circle',
    templateUrl: 'circle.html',
})
export class CirclePage {
    public circleData: Array<object> = [];
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public http: HttpClient,
        public storage:Storage,
        public pop:PopProvider,
        public find:FindProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CirclePage');
        this.getData();
    }

    // 获取圈子页面数据
    // public getCircleData() {
    //     this.http.get("./assets/data.json").subscribe(data => {
    //         this.circle = data['circle'];
    //     });
    // }
    public getData(type = 0,page = 1){
        this.storage.get('token').then((token)=>{
            this.find.getCircleList(type,page,token).subscribe(res=>{
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

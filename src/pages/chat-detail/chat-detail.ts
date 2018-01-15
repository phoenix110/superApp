import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Content} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the ChatDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment: "chatDetail/:id"
})
@Component({
    selector: 'page-chat-detail',
    templateUrl: 'chat-detail.html',
})
export class ChatDetailPage {
    public chatData: Array<object> = [];
    @ViewChild(Content) content: Content;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public Http: HttpClient) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ChatDetailPage');
        this.getChatData();
        this.content.resize();
        this.scrollToBottom();
    }

    public getChatData() {
        this.Http.get("./assets/data.json").subscribe(res => {
            console.log(res['chatInfo'])
            this.chatData = res['chatInfo'];
        });
    }

    // 滚动值聊天页最底部
    public scrollToBottom() {
        setTimeout(() => {
            if (this.content.scrollToBottom) {
                this.content.scrollToBottom();
            }
        }, 400)
    }
}

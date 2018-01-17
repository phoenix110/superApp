import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StreamingMedia, StreamingVideoOptions} from "@ionic-native/streaming-media";

/**
 * Generated class for the LiveDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-live-detail',
  templateUrl: 'live-detail.html',
})
export class LiveDetailPage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public stream:StreamingMedia
  ) {
  }

  ionViewDidLoad() {
      let options: StreamingVideoOptions = {
          successCallback: () => { console.log('Video played') },
          errorCallback: (e) => { console.log('Error streaming') },
          orientation: 'landscape'
      };

      console.log(this.navParams.get('url'));
      this.stream.playVideo(this.navParams.get('url'), options);
  }

}

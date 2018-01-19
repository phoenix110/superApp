import { Component , Input} from '@angular/core';
import { NavController, NavParams } from "ionic-angular"
import {StreamingMedia, StreamingVideoOptions} from "@ionic-native/streaming-media";


/**
 * Generated class for the VideoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'live-video',
  templateUrl: 'video.html'
})
export class VideoComponent {
  @Input() direction:string = "row";
  @Input() videoList:any;
  text: string;

  constructor(
      public navCtrl:NavController,
      public navParams:NavParams,
      public stream:StreamingMedia
  ) {
    console.log('Hello VideoComponent Component');
    this.text = 'Hello World';
  }

  //直播页面
  toLiveDetailPage(url){
      this.play(url);
  }

  play(url){
      let options: StreamingVideoOptions = {
          successCallback: () => { console.log('Video played') },
          errorCallback: (e) => { console.log('Error streaming') },
          orientation: 'landscape'
      };
      this.stream.playVideo(url, options);
  }

  //跳转
  jump(url){
      this.navCtrl.push('LiveDetailPage',{
          'url':url
      });
  }

}

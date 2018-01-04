import { Component , Input} from '@angular/core';
import { NavController, NavParams } from "ionic-angular"


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

  constructor(public navCtrl:NavController, public navParams:NavParams) {
    console.log('Hello VideoComponent Component');
    this.text = 'Hello World';
  }

  //直播页面
  toLiveDetailPage(){
        this.navCtrl.push('LiveDetailPage');
  }

}

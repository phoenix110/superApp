import { Component, Input } from '@angular/core';
import { NavController } from "ionic-angular";

/**
 * Generated class for the CommentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'comment',
  templateUrl: 'comment.html'
})
export class CommentComponent {
  text: string;
  @Input() commentList:Array<object> = [];
  constructor(public navCtrl:NavController) {
    console.log('Hello CommentComponent Component');
    this.text = 'Hello World';
    console.log(this.commentList)
  }
    public toWorld(id){
        this.navCtrl.push("MypagePage",{id:id});
    }
}

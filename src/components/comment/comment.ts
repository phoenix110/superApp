import { Component, Input } from '@angular/core';

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
  constructor() {
    console.log('Hello CommentComponent Component');
    this.text = 'Hello World';
    console.log(this.commentList)
  }

}

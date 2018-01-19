import {Component, Input} from '@angular/core';

/**
 * Generated class for the TouCommentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tou-comment',
  templateUrl: 'tou-comment.html'
})
export class TouCommentComponent {

    @Input() commentInfo:object = {};
    constructor() {
    console.log('Hello TouCommentComponent Component');
  }

}

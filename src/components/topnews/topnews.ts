import { Component, Input } from '@angular/core';

/**
 * Generated class for the TopnewsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'topnews',
  templateUrl: 'topnews.html'
})
export class TopnewsComponent {
  @Input() topNews:Array<object> = [];
  text: string;

  constructor() {
    console.log('Hello TopnewsComponent Component');
    this.text = 'Hello World';
  }

}

import { Component } from '@angular/core';

/**
 * Generated class for the GoodChatComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'good-chat',
  templateUrl: 'good-chat.html'
})
export class GoodChatComponent {

  text: string;

  constructor() {
    console.log('Hello GoodChatComponent Component');
    this.text = 'Hello World';
  }

}

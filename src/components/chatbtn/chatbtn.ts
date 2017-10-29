import { Component } from '@angular/core';

/**
 * Generated class for the ChatbtnComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chatbtn',
  templateUrl: 'chatbtn.html'
})
export class ChatbtnComponent {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}

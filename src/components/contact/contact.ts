import { Component, Input } from '@angular/core';

/**
 * Generated class for the ContactComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'contact',
  templateUrl: 'contact.html'
})
export class ContactComponent {
  @Input() contact:Object = {};
  text: string;

  constructor() {
    console.log('Hello ContactComponent Component');
    this.text = 'Hello World';
  }
}

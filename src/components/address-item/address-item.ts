import { Component, Input } from '@angular/core';

/**
 * Generated class for the AddressItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'address-item',
  templateUrl: 'address-item.html'
})
export class AddressItemComponent {
  @Input() addressList:Array<object> = [];
  text: string;

  constructor() {
    console.log('Hello AddressItemComponent Component');
    this.text = 'Hello World';
  }

}

import { Component } from '@angular/core';

/**
 * Generated class for the GoodPicsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'good-pics',
  templateUrl: 'good-pics.html'
})
export class GoodPicsComponent {

  text: string;

  constructor() {
    console.log('Hello GoodPicsComponent Component');
    this.text = 'Hello World';
  }

}

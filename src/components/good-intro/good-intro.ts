import { Component } from '@angular/core';
/**
 * Generated class for the GoodIntroComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'good-intro',
  templateUrl: 'good-intro.html'
})
export class GoodIntroComponent {

  text: string;

  constructor() {
    console.log('Hello GoodIntroComponent Component');
    this.text = 'Hello World';
  }

}

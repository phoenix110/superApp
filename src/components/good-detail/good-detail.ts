import { Component , ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
/**
 * Generated class for the GoodStyleComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'good-detail',
  templateUrl: 'good-detail.html'
})
export class GoodStyleComponent {
@ViewChild(Slides) slides: Slides;
  text: string;

  constructor() {
    console.log('Hello GoodStyleComponent Component');
    this.text = 'Hello World';
  }

}

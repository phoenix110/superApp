import { Component, Input } from '@angular/core';

/**
 * Generated class for the ReviewerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'reviewer',
  templateUrl: 'reviewer.html'
})
export class ReviewerComponent {
  @Input() reviewerInfo:Array<object> = [];
  text: string;

  constructor() {
      console.log('Hello ReviewerComponent Component');

  }
}

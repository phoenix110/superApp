import { Component } from '@angular/core';

/**
 * Generated class for the VideoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'live-video',
  templateUrl: 'video.html'
})
export class VideoComponent {

  text: string;

  constructor() {
    console.log('Hello VideoComponent Component');
    this.text = 'Hello World';
  }

}

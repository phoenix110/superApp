import { Component , Input} from '@angular/core';
import { NavController } from "ionic-angular";

/**
 * Generated class for the UseravatarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'useravatar',
  templateUrl: 'useravatar.html'
})
export class UseravatarComponent {

  text: string;
  @Input() userInfo:Object;
  constructor(public navCtrl:NavController) {
    console.log('Hello UseravatarComponent Component');
    this.text = 'Hello World';
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelfHeadComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'self-head',
  templateUrl: 'self-head.html'
})
export class SelfHeadComponent {

  constructor( public navCtrl:NavController , public navParams:NavParams ) {
    console.log('Hello SelfHeadComponent Component');
    
  }
  backPrev(){
  	this.navCtrl.pop();
  }
}

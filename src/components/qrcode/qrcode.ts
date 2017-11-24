import {Component, EventEmitter, Output} from '@angular/core';

/**
 * Generated class for the QrcodeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'qrcode',
  templateUrl: 'qrcode.html'
})
export class QrcodeComponent {

  text: string;
  @Output() hideQr =  new EventEmitter();
  constructor() {
    console.log('Hello QrcodeComponent Component');
    this.text = 'Hello World';
  }
  // 隐藏个人二维码
  public hideCode(){
    this.hideQr.emit(false);
  }
}

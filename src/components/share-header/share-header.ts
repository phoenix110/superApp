import {Component, Input, Output} from '@angular/core';
import { EventEmitter } from "@angular/core";

/**
 * Generated class for the ShareHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'share-header',
  templateUrl: 'share-header.html'
})
export class ShareHeaderComponent {
  @Input() headerTitle:string = '';
  @Input() shareLink:string = '';
  @Input() commentPage:string = '';
  @Input() concern:string = '';
  @Input() all:string = '';
    //声明事件发射器
    @Output() checkEmitter = new EventEmitter<boolean>();
  text: string;

  constructor() {
    console.log('Hello ShareHeaderComponent Component');
    this.text = 'Hello World';
  }
  // 点击分享
  public share(){
    console.log("您已点击了分享按钮！");
  }
  // 点击评论
    public comment(){
        console.log("您点击了评论按钮！")
    }
    // 打开性别选择框
    public openAction(){
        this.checkEmitter.emit(true);
    }
}

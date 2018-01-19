import { Component, Input, ElementRef,Renderer2,ViewChild } from '@angular/core';
import {UtilsProvider} from "../../providers/utils/utils";

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
    @ViewChild("card") card;
  constructor(
      public elf:ElementRef,
      public render:Renderer2,
      public Utils:UtilsProvider
  ) {
      console.log('Hello ReviewerComponent Component');
  }
  public swipeCard(e,i){
      let card = this.Utils.getClassName(document,"chat-card")[i];
      card.style.left = card.getBoundingClientRect()['x'] + e.deltaX;
      card.style.top = card.getBoundingClientRect()['y'] + e.deltaY;
      console.log(card)
      console.log(this.elf.nativeElement.querySelectorAll("ion-card")[i].style.top)
      console.log(card.getBoundingClientRect()['x'])
      console.log(e.deltaX)
  }
}

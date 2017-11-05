import { Directive, ElementRef } from '@angular/core';

/**
 * Generated class for the SliderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[slider]' // Attribute selector
})
export class SliderDirective {

  constructor(public el:ElementRef) {
    console.log('Hello SliderDirective Directive');
    console.log(this.el.nativeElement);
  }

}

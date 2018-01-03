import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DelArrfirstPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'delArrfirst',
})
export class DelArrfirstPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, ...args) {
    return value.splice(1,1);
  }
}

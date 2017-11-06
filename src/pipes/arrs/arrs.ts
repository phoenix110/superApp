import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ArrsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'arrs',
})
export class ArrsPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, ...args) {
      let arr:Array<object> = [];
      if (value instanceof Array){
          return value;
      }else if(value instanceof Object){
          arr.push(value);
          return arr;
      }
  }
}

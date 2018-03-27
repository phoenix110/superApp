import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ArrsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
// 对象转数组，便于ngFor指令循环遍历
@Pipe({
  name: 'arrs',
})
export class ArrsPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, ...args) {
      let arr:Array<object> = [];
      let arrStr = [];
      if (value instanceof Array){
          return value;
      }else if(value instanceof Object){
          arr.push(value);
          return arr;
      }else if(typeof (value) == "string"){
          arrStr.push(value);
          return arrStr;
      }
  }
}

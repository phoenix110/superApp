import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ObjArrPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */

// 循环遍历父对象下的子对象，并将循环出的键名放入子对象中作为子对象的属性
@Pipe({
  name: 'objArr',
})
export class ObjArrPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, ...args) {
      let arr:Array<object> = [];
      if (value instanceof Array){
          return value;
      }else if(value instanceof Object){
          for(let attr in value){
              value[attr].key = attr;
              arr.push(value[attr]);
          }
          return arr;
      }
  }
}

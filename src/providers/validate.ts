import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the VelidateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ValidateProvider {

  constructor() {
    console.log('Hello VelidateProvider Provider');
  }
    //去左右空格;
    public phone(s){
        let regular = /1[0-9]{10,10}/;
        return regular.test(s);
    }
    //去左右空格;
    public trim(s){
      return s.replace(/(^\s*)|(\s*$)/g, "");
  }
}

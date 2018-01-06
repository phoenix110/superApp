import {Injectable} from '@angular/core';
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

    //验证手机号;
    public phone(s) {
        let regular = /1[0-9]{10,10}/;
        return regular.test(s);
    }

    //去左右空格;
    public trimBlank(s) {
        let str = s.replace(/(^\s*)|(\s*$)/g, "");
        if (str == '') {
            return false;
        }
        return str;
    }
    // 禁止事件冒泡
    public stopEventPropagation(event:Event)
    {
        let e = event["srcEvent"];
        if(e && e != undefined && e != null)
        {
            let stopPropagation = e["stopPropagation"];
            if(stopPropagation && stopPropagation != undefined && stopPropagation != null)
            {
                e.stopPropagation();
            }
        }
    }
}

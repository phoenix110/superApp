import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the UtilsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilsProvider {

    constructor() {
        console.log('Hello UtilsProvider Provider');
    }

    // 通过类名获取元素
    public getClassName(parent, cls){
        if(parent.getElementsByClassName){
            return parent.getElementsByClassName(cls);
        }else{
            let res = [];
            let reg = new RegExp(' ' + cls + ' ', 'i');
            let ele = parent.getElementsByTagName('*');
            for(let i = 0; i < ele.length; i++){
                if(reg.test(' ' + ele[i].className + ' ')){
                    res.push(ele[i]);
                }
            }
            return res;
        }
    }
    // 显示隐藏底部导航菜单
    public toggleTabs(status){
        let tabbars = document.querySelectorAll(".tabbar");
        console.log(tabbars)
        if(status){
            Object.keys(tabbars).map((key) => {
                tabbars[key].style.display = "none";
            })
        }else{
            Object.keys(tabbars).map((key) => {
                tabbars[key].style.display = "flex";
            })
        }
    }
}

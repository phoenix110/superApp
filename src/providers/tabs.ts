import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpProvider} from "./http";

/*
  Generated class for the TabsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TabsProvider {

    constructor(public Http: HttpProvider) {
        console.log('Hello TabsProvider Provider');
    }

    //获取联盟列表
    getUnionList(page = 1, cid = 0) {
        let options = {
            page: page,
            cid: cid
        };
        return this.Http.post('union',options);
    }

    //获取商品分类列表
    getShopList() {
        let options = {
            op: "get_category_list"
        };
        return this.Http.post(options);
    }

    //获取发现分类列表
    getFindList() {
        return this.Http.post('find');
    }

    //获取我的圈子列表
    public getMyCircleList(type = 0, page = 1, token = '') {
        return this.Http.post('circle',{
            type: type,
            page: page,
            token: token
        });
    }
    // 获取社群列表数据
    public getGroupList(page = 1) {
        return this.Http.post('group',{
            op: 'get_groups',
            page: page,
        });
    }
}

import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
// 注入服务
import {HttpProvider} from "./http";
import {PopProvider} from "./pop";

/*
  Generated class for the PublishProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PublishProvider {

    constructor(public http: HttpProvider,
                public Pop: PopProvider,) {
    }

    // 圈子发布
    public pubCircle(params) {
        let options = {
            op: "",
            src: params.src
        };
        return this.http.post(options);
    }
}

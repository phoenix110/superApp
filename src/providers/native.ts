import { Injectable } from '@angular/core';
import { Platform} from "ionic-angular";
// import { Network} from "@ionic-native/network";
import 'rxjs/add/operator/map';

/*
  Generated class for the NativeServieProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NativeProvider {

    constructor(
        public platform:Platform,
        // public network:Network
    ) {
        console.log('Hello NativeServieProvider Provider');
    }
    /**
     * 是否真机环境
     */
    isMobile(): boolean {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    }

    /**
     * 是否android真机环境
     */
    isAndroid(): boolean {
        return this.isMobile() && this.platform.is('android');
    }

    /**
     * 是否ios真机环境
     */
    isIos(): boolean {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    }
    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    getNetworkType(): string {
        if (!this.isMobile()) {
            return 'wifi';
        }
        // return this.network.type;
    }
    /**
     * 判断是否有网络
     */
    // isConnecting(): boolean {
    //     return this.getNetworkType() != 'none';
    // }
}
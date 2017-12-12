import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GlobalDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalDataProvider {

  constructor(public http: Http) {
    console.log('Hello GlobalDataProvider Provider');
  }
    private _userId: string;//用户id
    private _username: string;//用户名
    private _fullName: string;//姓名
    private _token: string;//token
    //设置http请求是否显示loading,注意:设置为true,接下来的请求会不显示loading,请求执行完成会自动设置为false
    private _showLoading: boolean = true;

    //app更新进度.默认为0,在app升级过程中会改变
    private _updateProgress: number = -1;

    get userId(): string {
        return this._userId;
    }

    set userId(value: string) {
        this._userId = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }

    get showLoading(): boolean {
        return this._showLoading;
    }

    set showLoading(value: boolean) {
        this._showLoading = value;
    }

    get updateProgress(): number {
        return this._updateProgress;
    }

    set updateProgress(value: number) {
        this._updateProgress = value;
    }

}

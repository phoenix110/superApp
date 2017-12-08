import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';

/*
  Generated class for the RequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RequestProvider Provider');
  }
    /**
     * get请求
     * @param url 接口地址
     * @param params 参数
     * @returns {Promise<R>|Promise<U>}
     */
    public get(url: string, params: any): any {
        return this.http.get(url, {search: params})
            .toPromise()
            .then(this.handleSuccess)
            .catch(res => this.handleError(res));
    }

    /**
     * post请求
     * @param url 接口地址
     * @param params 参数
     * @returns {Promise<R>|Promise<U>}
     */
    public post(url: string, params: any) {
        return this.http.post(url, params)
            .toPromise()
            .then(this.handleSuccess)
            .catch(res => this.handleError(res));
    }

    /**
     * 处理请求成功
     * @param res
     * @returns {{data: (string|null|((node:any)=>any)
   */
    private handleSuccess(res: Response) {
        let body = res["_body"];
        if (body) {
            return {
                data: res.json().content || {},
                page: res.json().page || {},
                statusText: res.statusText,
                status: res.status,
                success: true
            }
        }
        else {
            return {
                statusText: res.statusText,
                status: res.status,
                success: true
            }
        }

    }

    /**
     * 处理请求错误
     * @param error
     * @returns {void|Promise<string>|Promise<T>|any}
     */
    private handleError(error) {
        console.log(error);
        let msg = '请求失败';
        if (error.status == 400) {
            console.log('请求参数正确');
        }
        if (error.status == 404) {

            console.error('请检查路径是否正确');
        }
        if (error.status == 500) {
            console.error('请求的服务器错误');
        }
        console.log(error);
        return {success: false, msg: msg};

    }
}

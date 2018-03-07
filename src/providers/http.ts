import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {APP_SERVE_URL} from "../app/app.config";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {TimeoutError} from "rxjs/Rx";

// 服务注入
import {PopProvider} from "./pop";
import {NativeProvider} from "./native";
import { Storage } from "@ionic/storage";

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
    public ws:WebSocket;
    constructor(public http: HttpClient,
                public Pop: PopProvider,
                public NativeProvider: NativeProvider,
                public Storage:Storage,
                public pop:PopProvider) {
        console.log('Hello HttpProvider Provider');
    }

    /**
     * get方式请求
     * @param {string} url     //url
     * @param paramObj      //json对象 如:{name:'大见',age:'23'}
     * @return {Promise<never | {}>}
     */
    get(paramObj: any = {}) {
        // let timestamp = Math.floor(new Date().getTime() / 1000 - 1420070400).toString();    //获取当前时间 减 2015年1月1日的 时间戳
        // let headers = new HttpHeaders({'timestamp': timestamp});
        return Observable.create(observer => {
            this.Pop.showLoading();
            this.http.get(APP_SERVE_URL + this.toQueryString(paramObj))
                .subscribe(res => {
                        this.Pop.hideLoading();
                        observer.next(res);
                    }, err => {
                        this.handleError(err);
                    }
                )
        });

    }

    /**
     * post方式请求
     * @param {string} url
     * @param body       //如：paramObj:{name:'大见',age:'23'}
     * @param {string} contentType      //post请求的编码方式  application/x-www-form-urlencoded  multipart/form-data   application/json   text/xml
     * @return {Promise<never | {}>}
     */
    post(sub_url,body: any = {}, contentType: string = "application/x-www-form-urlencoded") {
        let headers = new HttpHeaders({'Content-Type': contentType});
        return Observable.create(observer => {
            this.Pop.showLoading();
            this.http.post(APP_SERVE_URL+sub_url, this.toBodyString(body), {headers: headers})
                .subscribe(res => {
                        this.Pop.hideLoading();
                        observer.next(res);
                    }, err => {
                        this.handleError(err);
                    }
                )
        });
    }
    /*
    *  以formData数据形式发送post请求
    */
    formData(sub_url,body:any = {},contentType:string = "multipart/form-data"){
        let headers = new HttpHeaders({'Content-Type':contentType});
        return Observable.create(observer => {
            this.Pop.showLoading();
            this.http.post(APP_SERVE_URL+sub_url, body,{headers:headers})
                .subscribe( res => {
                    this.Pop.hideLoading();
                    observer.next(res);
                },err => {
                        this.handleError(err);
                    }
                )
        });
    };

    /*
    *  webSocket 长连接构建即时通信服务
    */
    createWebSocket(api:string = ''){
        //判断当前浏览器是否支持WebSocket
        if('WebSocket' in window){
            this.ws = new WebSocket(APP_SERVE_URL + api);
        }
        else{
            this.Pop.toast("当前客户端不支持webSocket！");
        }
        return Observable.create(observer => {
            this.ws.onmessage = (res) => observer.next(res.data);
            this.ws.onerror = (err) => observer.next(err);
            this.ws.onclose = (res) => observer.complete();
        });
    }

    /*
    *  利用webSocket向服务端发送消息
    */

    sendMessage(message){
        this.ws.send(message);
    }
    // 获取本地城市列表服务
    getCityData() {
        return Observable.create(observer => {
            this.http.get("./assets/area-data.json")
                .subscribe(res => {
                        observer.next(res);
                    }, err => {
                        this.handleError(err);
                    }
                )
        });
    }
    // 获取登录的token值
    public getToken(){
        return Observable.create(observer =>{
            this.Storage.get("token").then(val=>{
                if(val == null || val == "" || val == undefined){
                    this.Pop.confirm().subscribe(res=>{
                        if(res['is_login']){
                            observer.next(false);
                        }
                    });
                }else{
                    observer.next(val);
                }
            });
        });
    }
    /**
     * get请求参数处理
     *  对于get方法来说，都是把数据串联在请求的url后面作为参数，如果url中出现中文或其它特殊字符的话，很常见的一个乱码问题就要出现了
     *  url拼接完成后，浏览器会对url进行URL encode，然后发送给服务器，URL encode的过程就是把部分url做为字符，按照某种编码方式（如：utf-8,gbk等）编码成二进制的字节码
     * 不同的浏览器有不同的做法，中文版的浏览器一般会默认的使用GBK，通过设置浏览器也可以使用UTF-8，可能不同的用户就有不同的浏览器设置，也就造成不同的编码方式，
     * 所以通常做法都是先把url里面的中文或特殊字符用 javascript做URL encode，然后再拼接url提交数据，也就是替浏览器做了URL encode，好处就是网站可以统一get方法提交数据的编码方式。
     * @param obj　参数对象
     * @return {string}　参数字符串
     * @example
     *  声明: var obj= {'name':'大见',age:23};
     *  调用: toQueryString(obj);
     *  返回: "?name=%E5%B0%8F%E5%86%9B&age=23"
     */
    private toQueryString(obj) {
        let ret = [];
        for (let key in obj) {
            key = encodeURIComponent(key);
            let values = obj[key];
            if (values && values.constructor == Array) {//数组
                let queryValues = [];
                for (let i = 0, len = values.length, value; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                ret = ret.concat(queryValues);
            } else { //字符串
                ret.push(this.toQueryPair(key, values));
            }
        }
        return '?' + ret.join('&');
    }

    /**
     *  post请求参数处理
     * @param obj
     * @return {string}
     *  声明: var obj= {'name':'大见',age:23};
     *  调用: toQueryString(obj);
     *  返回: "name=%E5%B0%8F%E5%86%9B&age=23"
     */
    public toBodyString(obj) {
        let ret = [];
        for (let key in obj) {
            key = encodeURIComponent(key);
            // key = key;
            let values = obj[key];
            if (values && values.constructor == Array) {//数组
                let queryValues = [];
                for (let i = 0, len = values.length, value; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                ret = ret.concat(queryValues);
            } else { //字符串
                ret.push(this.toQueryPair(key, values));
            }
        }
        return ret.join('&');
    }

    private toQueryPair(key, value) {
        if (typeof value == 'undefined') {
            return key;
        }
        return key + '=' + encodeURIComponent(value === null ? '' : String(value));
        // return key + '=' +(value === null ? '' : String(value));
    }

    private toSignPair(key, value) {
        return key + '=' + (value === null ? '' : String(value));
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    /**
     * 处理请求失败事件
     * @param url
     * @param options
     * @param err
     */
    private handleError(err: any): void {
        this.Pop.hideLoading();
        console.log('%c 请求失败 %c', 'color:red', 'err', err);
        if (err instanceof TimeoutError) {
            this.Pop.alert('请求超时,请稍后再试!');
            return;
        }
        // if (!this.NativeProvider.isConnecting()) {
        //     this.AlertProvider.alert('请求失败，请连接网络');
        //     return;
        // }
        let msg = '请求发生异常';
        try {
            let result = err.json();
            this.Pop.alert(result.message || msg);
        } catch (err) {
            let status = err.status;
            if (status === 0) {
                msg = '请求失败，请求响应出错';
            } else if (status === 404) {
                msg = '请求失败，未找到请求地址';
            } else if (status === 500) {
                msg = '请求失败，服务器出错，请稍后再试';
            }
            this.Pop.alert(msg);
            // this.logger.httpLog(err, msg, {
            //     url: url,
            //     status: status
            // });
        }

    }
}

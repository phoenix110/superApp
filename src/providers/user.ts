import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
// 注入服务
import {HttpProvider} from "./http";
import { PopProvider } from "./pop";
import { ValidateProvider } from "./validate";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

    constructor(
        public http: HttpProvider,
        public Pop:PopProvider,
        public Valify:ValidateProvider
    ) {
        console.log('Hello UserProvider Provider');
    }
    public num = 0;
    // 用户登录
    public login(params) {
        let options = {
            op: "login",
            mobile: params.mobile,
            password: params.password,
        };
        console.log(options)
        return this.http.post(options);
    }

    // 用户注册
    public register(params) {
        let options = {
            op: "register",
            mobile: params.mobile,
            password: params.password,
            repassword: params.repassword,
            code: params.code
        };
        console.log(options);
        return this.http.post(options);
    }
    // 获取验证码
    public getCode(obj) {
        let mobile = obj.userInfo.mobile;
        if(mobile == ''){
            this.Pop.toast("手机号不能为空");
            return false;
        }
        if(!this.Valify.phone(mobile)){
            this.Pop.toast("手机号格式不正确");
            return false;
        }
        let options = {
            op: "send_code",
            mobile: obj.userInfo.mobile
        };
        console.log(options);
        this.http.post(options).subscribe(res=>{
            if(res.type == 'success'){
                this.downTime(obj);
                this.Pop.toast(res.message);
            }else{
                this.Pop.alert(res.message);
            }
        });
    }
    // 验证码倒计时
    public downTime(obj){
        let time = 60;
        time--;
        obj.codeText = time + "s后重试";
        obj.codeStatus = true;
        let timer = setInterval(function(){
            if(time <= 1){
                time = 60;
                obj.codeText = "获取验证码";
                obj.codeStatus = false;
                clearInterval(timer);
                return false;
            }
            time--;
            obj.codeText = time + "s后重试";
            obj.codeStatus = true;
        },1000);
    }
    // 忘记密码
    public forget(params) {
        let options = {
            op: "forget",
            mobile: params.mobile,
            password: params.password,
            repassword: params.repassword,
            code: params.code
        };
        console.log(options);
        return this.http.post(options);
    }
    // 获取会员信息
    public getUserInfo(params) {
        let options = {
            op: "get_user_info",
            avatar: params.avatar,
            nickname: params.nickname,
            gender: params.gender,
            age: params.age,
            province: params.province,
            city: params.city,
            district: params.district
        };
        console.log(options);
        return this.http.post(options);
    }
    // 完善个人资料
    public updateUserInfo(params) {
        let options = {
            op: "update_user_info",
            token:params.token
        };
        console.log(options);
        return this.http.post(options);
    }
    public validate(params){
        let mobile = params.mobile;
        let password = params.password;
        let repassword = params.repassword;
        let code = params.code;
        if(mobile == ''){
            this.Pop.toast("手机号不能为空");
            return false;
        }
        if(!this.Valify.phone(mobile)){
            this.Pop.toast("手机号格式不正确");
            return false;
        }
        if(password == '' || repassword == ''){
            this.Pop.toast("密码不能为空");
            return false;
        }
        if(password.length < 6 || repassword.length < 6){
            this.Pop.toast("密码长度不能少于6位");
            return false;
        }
        if(password !== repassword){
            this.Pop.toast("两次密码输入不一致");
            return false;
        }
        if(code == '' ){
            this.Pop.toast("验证码不能为空");
            return false;
        }
        if(code.length < 6){
            this.Pop.toast("验证码格式不正确");
            return false;
        }
        return true;
    }

}

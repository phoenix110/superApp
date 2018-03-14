import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
// 注入服务
import {HttpProvider} from "./http";
import { PopProvider } from "./pop";
import { ValidateProvider } from "./validate";
import { Storage } from "@ionic/storage";
import {AuthProvider} from "./auth";

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
        public Valify:ValidateProvider,
        public Storage:Storage,
        public Auth:AuthProvider
    ) {
        console.log('Hello UserProvider Provider');
    }

    public num = 0;
    public token:string = "";

    // 获取用户登录信息的token值
    public getToken(){

    }
    // 用户登录
    public login(params) {
        let options = {
            mobile: params.mobile,
            password: params.password,
        };
        return this.http.post('auth/login',options);
    }

    // 用户注册
    public register(params) {
        let options = {
            parent_uid:params.parent_uid,
            mobile: params.mobile,
            password: params.password,
            repassword: params.repassword,
            code: params.code
        };
        return this.http.post('auth/register',options);
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
            mobile: obj.userInfo.mobile
        };
        this.http.post('sms/send',options).subscribe(res=>{
			this.Pop.toast(res.message);
            if(res.code == '0'){
                this.downTime(obj);   
            }
        });
    }
    // 修改支付密码(获取验证码)
    public getPayCode(params){
        let options = {
            uid:params.uid,
            oldPwd:params.oldPwd,
            newPwd:params.newPwd,
            reNewPwd:params.reNewPwd,
            code:params.code
        };
        return this.Auth.authLogin(options,'sms/send');
    }
    // 添加支付密码
    public addPayCode(params){
        let options = {
            uid:params.uid,
            newPwd:params.newPwd,
            reNewPwd:params.reNewPwd,
            code:params.code
        };
        return this.Auth.authLogin(options,'sms/send');
    }
    // 保存修改后的支付密码(获取验证码)
    public changePayCode(params){
        let options = {
            uid:params.uid,
            oldPwd:params.oldPwd,
            newPwd:params.newPwd,
            reNewPwd:params.reNewPwd,
            code:params.code
        };
        return this.Auth.authLogin(options,'sms/send');
    }
    // 重置支付密码
    public resetPayPwd(params){
        let options = {
            uid:params.uid,
            newPwd:params.newPwd,
            reNewPwd:params.reNewPwd,
            code:params.code
        };
        return this.Auth.authLogin(options,'sms/send');
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
            mobile: params.mobile,
            password: params.password,
            repassword: params.repassword,
            code: params.code
        };
        return this.http.post('auth/forget',options);
    }
    // 获取会员信息
    public getUserInfo(token) {
        let options = {
            token:token
        };
        return this.http.post('member',options);
    }
    //   更新个人资料
    public updateUserInfo(params) {
        let options = {
            avatar: params.avatar,
            nickname: params.nickname,
            gender: params.gender,
            age: params.age,
            province: params.province,
            city: params.city,
            district: params.district,
            token:params.token
        };
        return this.http.post('member/update',options);
    }
    // 获取省市区列表数据
    public cityListData(cityList){
         this.http.getCityData().subscribe(res=>{
             cityList.area = res;
        });
    }
    // 注册、修改密码格式验证
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
    // 获取购物车列表
    public getCartData(){
        return this.Auth.authLogin({},'cart');
    }
    // 删除购物车
    public removeCartData(id){
        let options = {
            id:id
        };
        return this.Auth.authLogin(options,'cart/delete');
    }

    //设置直播信息
    public setLiveConfig(params = {}){
        return this.Auth.authLogin(params,'live/set');
    }

    //获取直播信息
    public getLiveConfig(){
        return this.Auth.authLogin({},'live/config');
    }

    //获取直播列表信息
    public getLives(page){
        return this.http.post('live',{
            page:page
        });
    }
}

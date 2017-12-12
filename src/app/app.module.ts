import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule} from 'ionic-angular';
import { HttpClientModule  } from '@angular/common/http';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// 导入公共Module
import { ComponentsModule } from "../components/components.module";
import { HttpProvider } from '../providers/http';
import { NativeProvider } from '../providers/native';
import { UserProvider } from '../providers/user';
import { ValidateProvider } from '../providers/validate';
// 注入自定义服务
import { FUNDEBUG_API_KEY, IS_DEBUG, ENABLE_FUNDEBUG } from "../providers/constant";

//安装错误日志依赖:npm i fundebug-javascript --save
//https://docs.fundebug.com/notifier/javascript/framework/ionic2.html
import * as fundebug from "fundebug-javascript";
import { GlobalDataProvider } from '../providers/globalData';
import { LoggerProvider } from '../providers/logger';
import {Camera} from "@ionic-native/camera";
import {ImagePicker} from "@ionic-native/image-picker";
fundebug.apikey = 'API-KEY';
fundebug.apikey = FUNDEBUG_API_KEY;
fundebug.releasestage = IS_DEBUG ? 'development' : 'production';//应用开发阶段，development:开发;production:生产
fundebug.silent = !ENABLE_FUNDEBUG;//如果暂时不需要使用Fundebug，将silent属性设为true
export class FunDebugErrorHandler implements ErrorHandler {
    handleError(err: any): void {
        fundebug.notifyError(err);
        console.error(err);
    }
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
      ComponentsModule,
      HttpClientModule,
    // 配置项：tabsHideOnSubPages用于控制由主页面进入子页面是的底部导航的隐藏和现实
    IonicModule.forRoot(MyApp,{
        tabsHideOnSubPages: 'true',
        backButtonText: '',
            mode: 'ios',
    }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpProvider,
    NativeProvider,
    UserProvider,
    Camera,
    ImagePicker,
    ValidateProvider,
      {provide: ErrorHandler, useClass: FunDebugErrorHandler},
    GlobalDataProvider,
    LoggerProvider,
  ]
})
export class AppModule {
  constructor(){

  }
}

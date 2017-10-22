import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// 导入公共Module
import {MyComponentModule} from "../components/myComponent.module";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    MyComponentModule,
    // 配置项：tabsHideOnSubPages用于控制由主页面进入子页面是的底部导航的隐藏和现实
    IonicModule.forRoot(MyApp,{
        tabsHideOnSubPages: 'true',
        backButtonText: '返回',
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

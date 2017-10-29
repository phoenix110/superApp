import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { HttpClientModule  } from '@angular/common/http';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// 导入公共Module
import { ComponentsModule } from "../components/components.module";

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
    }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen
  ]
})
export class AppModule {}

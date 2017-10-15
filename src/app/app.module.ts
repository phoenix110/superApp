import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// 页面
import { TabsPage } from '../pages/tabs/tabs';
import { UnionPage } from '../pages/union/union';
import { FindPage } from '../pages/find/find';
import { MyPage } from '../pages/my/my';
import { ChatPage } from '../pages/chat/chat';
import { GroupPage } from '../pages/group/group';
import { HomePage } from '../pages/home/home';
import { CompanyPage } from '../pages/company/company';
import { ShopPage } from '../pages/shop/shop';
import { GoodPage } from '../pages/good/good';

// 组件
import { GoodIntroComponent } from '../components/good-intro/good-intro';
import { GoodStyleComponent } from '../components/good-detail/good-detail';
import { SelfHeadComponent } from '../components/self-head/self-head';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    UnionPage,
    FindPage,
    MyPage,
    ChatPage,
    GroupPage,
    HomePage,
    CompanyPage,
    ShopPage,
    GoodPage,
    GoodIntroComponent,
    GoodStyleComponent,
    SelfHeadComponent
  ],
  imports: [
    BrowserModule,
    // 配置项：tabsHideOnSubPages用于控制由主页面进入子页面是的底部导航的隐藏和现实
    IonicModule.forRoot(MyApp,{
        tabsHideOnSubPages: 'true',
        backButtonText: '返回',
    }, {
      links:[
        {
          component:UnionPage,name:'union',segment:'union'
        },
        {
          component:FindPage,name:'find',segment:'find'
        },
        {
          component:MyPage,name:'my',segment:'my'
        },
        {
          component:ChatPage,name:'chat',segment:'chat'
        },
        {
          component:GroupPage,name:'group',segment:'group'
        },
        {
          component:HomePage,name:'home',segment:'home'
        },
        {
          component:CompanyPage,name:'company',segment:'company/:id'
        },
        {
          component:ShopPage,name:'shop',segment:'shop'
        },
        {
          component:GoodPage,name:'good',segment:'good/:id'
        },
      ]
    }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    UnionPage,
    FindPage,
    MyPage,
    ChatPage,
    GroupPage,
    HomePage,
    CompanyPage,
    ShopPage,
    GoodPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IonicApp, IonicModule} from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import {MyApp} from './app.component';
// 导入本地硬件调用服务
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Camera} from "@ionic-native/camera";
import {ImagePicker} from "@ionic-native/image-picker";
import {AppVersion} from "@ionic-native/app-version";
import {File} from "@ionic-native/file";
import { FileTransfer } from '@ionic-native/file-transfer';
import {Network} from "@ionic-native/network";
import {IonicStorageModule} from "@ionic/storage";
// 导入公共Module
import {ComponentsModule} from "../components/components.module";

// 注入自定义服务
import {HttpProvider} from '../providers/http';
import {NativeProvider} from '../providers/native';
import {UserProvider} from '../providers/user';
import {ValidateProvider} from '../providers/validate';
import {GlobalDataProvider} from '../providers/globalData';
import {LoggerProvider} from '../providers/logger';
import {CompanyProvider} from "../providers/company";
import {ArticleProvider} from '../providers/article';
import {AppProvider} from '../providers/app';
import {PopProvider} from "../providers/pop";
import {TongxinProvider} from '../providers/tongxin';
import {PublishProvider} from '../providers/publish';
import {AuthProvider} from "../providers/auth";
import { TabsProvider } from '../providers/tabs';
import { FindProvider } from '../providers/find';
import { GoodsProvider } from '../providers/goods';
import { UtilsProvider } from '../providers/utils/utils';
import { OrderProvider } from '../providers/order';
import { PincodeInputModule } from  'ionic2-pincode-input';
@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        ComponentsModule,
        HttpClientModule,
        PincodeInputModule,
        BrowserAnimationsModule,
        IonicStorageModule.forRoot({
            name: 'myApp',
            driverOrder: ['indexeddb', 'sqlite', 'websql']
        }),
        // 配置项：tabsHideOnSubPages用于控制由主页面进入子页面是的底部导航的隐藏和现实
        IonicModule.forRoot(MyApp, {
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
        Camera,
        ImagePicker,
        AppVersion,
        File,
        FileTransfer,
        Network,
        HttpProvider,
        NativeProvider,
        UserProvider,
        ValidateProvider,
        GlobalDataProvider,
        LoggerProvider,
        CompanyProvider,
        ArticleProvider,
        AppProvider,
        PopProvider,
        AuthProvider,
        TongxinProvider,
        PublishProvider,
        TabsProvider,
    FindProvider,
        GoodsProvider,
    UtilsProvider,
    OrderProvider
    ]
})
export class AppModule {
    constructor() {

    }
}

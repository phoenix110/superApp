import { Component, Input,ViewChild } from '@angular/core';
import { Platform, Nav ,IonicApp, Keyboard, Events} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PopProvider} from "../providers/pop";
import {TabsPage} from "../pages/tabs/tabs";
import { AppConfig } from "./app.config";
import {Shake} from "@ionic-native/shake";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "TabsPage";
  public codeStatus = false;
    public backButtonPressed = false;
    @Input() codeData:Object = {};
  @ViewChild(Nav) nav:Nav;
  public loginStatus:boolean = false;
  constructor(
      public ionicApp: IonicApp,
      public platform: Platform,
      public statusBar: StatusBar,
      public splashScreen: SplashScreen,
      public pop:PopProvider,
      public events:Events,
      public keyboard:Keyboard
  ) {

      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.events.subscribe("loginStatus",(status) => {
          this.loginStatus = status;
      });
      this.registerBackButtonAction();
    });
  }






  registerBackButtonAction() {
        this.platform.registerBackButtonAction(() => {
            if(this.keyboard.isOpen()){
                this.keyboard.close();
                return;
            }
            //如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
            // this.ionicApp._toastPortal.getActive() || this.ionicApp._loadingPortal.getActive() || this.ionicApp._overlayPortal.getActive()
            let activePortal = this.ionicApp._modalPortal.getActive();
            if (activePortal) {
                activePortal.dismiss().catch(() => {});
                activePortal.onDidDismiss(() => {});
                return;
            }
            let activeVC = this.nav.getActive();
            let tabs = activeVC.instance.tabs;
            let activeNav = tabs.getSelected();
            return activeNav.canGoBack() ? activeNav.pop() : this.showExit()
        }, 1);
    }

    //双击退出提示框
    showExit() {
        if (this.backButtonPressed) { //当触发标志为true时，即2秒内双击返回按键则退出APP
            this.platform.exitApp();
        } else {
            this.pop.toast("再按一次退出应用");
            this.backButtonPressed = true;
            setTimeout(() => this.backButtonPressed = false, 2000);//2秒内没有再次点击返回则将触发标志标记为false
        }
    }

  public showQr(){
    this.codeStatus = true


  }
  public fadeOut(event){
      this.codeStatus = event;
  }

  public login(){
      this.nav.push("LoginPage");
  }
  public register(){
    this.nav.push("RegisterPage");
  }
}

import { Component, Input,ViewChild } from '@angular/core';
import { Platform,ToastController, Nav ,IonicApp} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PopProvider} from "../providers/pop";
import {TabsPage} from "../pages/tabs/tabs";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "TabsPage";
  public codeStatus = false;
    public static backButtonPressedOnceToExit = false;
    @Input() codeData:Object = {};
  @ViewChild(Nav) nav:Nav;
  constructor(
      ionicApp: IonicApp,
      platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen,
      pop:PopProvider
  ) {

      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
          platform.registerBackButtonAction(function(e){
              this.nav.pop();
              if(MyApp.backButtonPressedOnceToExit){
                  platform.exitApp();
              }else{
                  MyApp.backButtonPressedOnceToExit = true;
                  let toast = pop.toast('再按一次退出');
                  setTimeout(function(){
                      MyApp.backButtonPressedOnceToExit = false;
                  },2000)
              }
          },101)
    });

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

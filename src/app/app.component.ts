import { Component, Input,ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "TabsPage";
  public codeStatus = false;
  @Input() codeData:Object = {};
  @ViewChild(Nav) nav:Nav;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
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

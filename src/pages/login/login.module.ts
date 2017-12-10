import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { PopProvider } from "../../providers/pop";
// User(会员)服务
import { UserProvider } from "../../providers/user";
@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
    providers:[
        UserProvider,
        PopProvider
    ]
})
export class LoginPageModule {}

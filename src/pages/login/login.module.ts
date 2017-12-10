import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

// http服务
import { HttpProvider } from "../../providers/http";

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
    providers:[
        HttpProvider
    ]
})
export class LoginPageModule {}

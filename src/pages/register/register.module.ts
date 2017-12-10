import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { UserProvider} from "../../providers/user";
import { PopProvider } from "../../providers/pop";
@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
  ],
    providers:[
        UserProvider,
        PopProvider
    ]
})
export class RegisterPageModule {}

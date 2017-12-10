import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgetPage } from './forget';
import { PopProvider} from "../../providers/pop";
import { UserProvider } from "../../providers/user";

@NgModule({
  declarations: [
    ForgetPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgetPage),
  ],
    providers:[
        PopProvider,
        UserProvider
    ]
})
export class ForgetPageModule {}

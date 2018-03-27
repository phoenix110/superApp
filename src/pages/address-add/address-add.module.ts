import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AddressAddPage} from './address-add';
// 公共组件模块
import {ComponentsModule} from "../../components/components.module";
// 省市区联动服务
import { MultiPickerModule } from 'ion-multi-picker';
@NgModule({
    declarations: [
        AddressAddPage,
    ],
    imports: [
        IonicPageModule.forChild(AddressAddPage),
        ComponentsModule,
        MultiPickerModule
    ],
})
export class AddressAddPageModule {
}

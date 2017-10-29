import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {KeFuPage} from './kefu';

import {ComponentsModule} from "../../components/components.module";

@NgModule({
    declarations: [
        KeFuPage,
    ],
    imports: [
        IonicPageModule.forChild(KeFuPage),
        ComponentsModule
    ],
})
export class KeFuPageModule {
}

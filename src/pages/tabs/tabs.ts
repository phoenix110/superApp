import {Component, ViewChild} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {Tabs} from "ionic-angular";

@IonicPage()
@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    @ViewChild("tabs") tabs: Tabs;
    tab1Root = "UnionPage";
    tab2Root = "FindPage";
    tab3Root = "MyPage";
    tab4Root = "ChatPage";
    tab5Root = "GroupPage";
    tab6Root = "CartPage";
    constructor() {

    }
}

import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = "UnionPage";
  tab6Root = "ShopPage";
  tab2Root = "FindPage";
  tab3Root = "MyPage";
  tab4Root = "ChatPage";
  tab5Root = "GroupPage";

  constructor() {

  }
}

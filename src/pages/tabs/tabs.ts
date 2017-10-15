import { Component } from '@angular/core';

import { UnionPage } from '../union/union';
import { FindPage } from '../find/find';
import { MyPage } from '../my/my';
import { ChatPage } from '../chat/chat';
import { GroupPage } from '../group/group';
import { ShopPage } from '../shop/shop';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UnionPage;
  tab6Root = ShopPage;
  tab2Root = FindPage;
  tab3Root = MyPage;
  tab4Root = ChatPage;
  tab5Root = GroupPage;

  constructor() {

  }
}

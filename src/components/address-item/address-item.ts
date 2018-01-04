import { Component, Input } from '@angular/core';
import {ActionSheetController, NavController} from "ionic-angular";

/**
 * Generated class for the AddressItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'address-item',
  templateUrl: 'address-item.html'
})
export class AddressItemComponent {
  @Input() addressList:Array<object> = [];
  text: string;

  constructor(
      public navCtrl:NavController,
      public actionSheetCtrl:ActionSheetController) {
    console.log('Hello AddressItemComponent Component');
    this.text = 'Hello World';
  }
  // 选中当前地址为收货地址
  public selectAddress(){

  }
  // 管理当前收货地址
  public editAddress(index,id){
      let actionSheet = this.actionSheetCtrl.create({
          buttons: [
              {
                  text: '编辑',
                  role: 'destructive',
                  handler: () => {
                      this.navCtrl.push("AddressEditPage",{id:id});
                  }
              },{
                  text: '设为默认',
                  role: 'destructive',
                  handler: () => {
                      this.addressList.forEach((item,idx,arr) => {
                        if(idx == index){
                          item['default'] = true;
                          return false;
                        }
                        item['default'] = false;

                      });
                  }
              }, {
                  text: '删除',
                  handler: () => {
                      this.addressList.splice(index,1);
                  }
              }, {
                  text: '取消',
                  role: 'cancel',
                  handler: () => {
                      console.log('选择头像已取消');
                  }
              }
          ]
      });
      actionSheet.present();
  }
}

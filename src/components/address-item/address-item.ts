import { Component, Input } from '@angular/core';
import {ActionSheetController, Events, NavController} from "ionic-angular";
import {GoodsProvider} from "../../providers/goods";
import {PopProvider} from "../../providers/pop";
import {ValidateProvider} from "../../providers/validate";

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
      public actionSheetCtrl:ActionSheetController,
      public Goods:GoodsProvider,
      public Pop:PopProvider,
      public events:Events,
      public Validate:ValidateProvider) {
    console.log('Hello AddressItemComponent Component');
    this.text = 'Hello World';
  }
  // 选中当前地址为本次订单收货地址
    public selectAddress(id){
        this.navCtrl.pop().then(() => {
            this.events.publish('addressCallback', id);
        });
    }
  // 管理当前收货地址
  public editAddress(index,id,$event){
      this.Validate.stopEventPropagation($event);

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
                      this.Goods.defaultAddress(id).subscribe(res =>{
                          if(res === "toLogin"){
                              this.navCtrl.push("LoginPage");
                              return false;
                          }
                          this.Pop.toast(res.message);
                          this.addressList.forEach((item,idx,arr) => {
                              if(idx == index){
                                  item['isdefault'] = 1;
                                  return false;
                              }
                              item['isdefault'] = 0;
                          });
                      });

                  }
              }, {
                  text: '删除',
                  handler: () => {
                      console.log(id)
                      this.Goods.delAddress(id).subscribe(res =>{
                          if(res === "toLogin"){
                              this.navCtrl.push("LoginPage");
                              return false;
                          }
                          this.Pop.toast(res.message);
                          this.addressList.splice(index,1);
                      });
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

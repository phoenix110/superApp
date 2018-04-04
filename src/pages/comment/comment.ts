import {ChangeDetectorRef, Component} from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {NativeProvider} from "../../providers/native";
import {PublishProvider} from "../../providers/publish";
import {PopProvider} from "../../providers/pop";

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment:"comment/:id/:type"
})
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html'
})
export class CommentPage {
    public pubData: object = {
        op:"",
        id:0,
        content: "",
        src: "",
    };
  public hasPic: boolean = false;
  public commentType:string = "";
  public commentTitle:string = "";
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public native: NativeProvider,
      public changeDetectorRef:ChangeDetectorRef,
      public Publish:PublishProvider,
      public Pop:PopProvider,
      private actionSheetCtrl: ActionSheetController) {
      this.commentType = this.navParams.get("type");
      this.pubData['id'] = this.navParams.get("id");
      switch (this.commentType){
          case 'touTiao':
              this.commentTitle = "添加评论";
              break;
          case 'news':
              this.commentTitle = "添加评论";
              break;
          case 'keFuAsk':
              this.commentTitle = "我要提问";
              break;
          case 'keFuAdd':
              this.commentTitle = "我要追问";
              break;
      }
  }

  ionViewDidLoad() {

  }
//选择上传的图片
    public uploadPics() {
        let actionSheet = this.actionSheetCtrl.create({
            title: '请选择图片',
            buttons: [
                {
                    text: '相机',
                    role: 'destructive',
                    handler: () => {
                        this.native.getPictureByCamera().subscribe(res => {
                            this.hasPic = true;
                            this.pubData['src'] = res;
                            this.pubData['type'] = "picture";
                            console.log(res)

                        })
                    }
                }, {
                    text: '图库',
                    handler: () => {
                        this.native.getPictureByPhotoLibrary({}).subscribe(res => {
                            this.hasPic = true;
                            this.pubData['src'] = res;
                            this.pubData['type'] = "picture";
                            this.changeDetectorRef.detectChanges();
                            console.log(res);
                        })
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {

                    }
                }
            ]
        });
        actionSheet.present();
    }
    // 提交评论内容
    public pushComment(){
        let commentType = this.commentType;
        switch (commentType){
            case 'touTiao':
                this.pubData['op'] = "touTiao";
                break;
            case 'news':
                this.pubData['op'] = "news";
                break;
            case 'keFuAsk':
                this.pubData['op'] = "keFuAsk";
                break;
            case 'keFuAdd':
                this.pubData['op'] = "keFuAdd";
                break;
        }
        this.Publish.addComment(this.pubData).subscribe( res => {
            if(res !== false){
                this.Pop.toast(res.message);
                this.navCtrl.pop();
            }
        })
    }
}

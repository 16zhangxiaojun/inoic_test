import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-anctionsheet',
  templateUrl: './anctionsheet.page.html',
  styleUrls: ['./anctionsheet.page.scss'],
})
export class AnctionsheetPage implements OnInit {
  VlueList: any = [];

  constructor(public actionSheetController: ActionSheetController ) {}

  ngOnInit() {
    for (let i = 0; i < 20; i++) {
    this.VlueList.push('我是第' + `${i + 1}` + '个内容!');
    }
    console.log(this.VlueList);
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}

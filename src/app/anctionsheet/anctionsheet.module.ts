import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnctionsheetPageRoutingModule } from './anctionsheet-routing.module';

import { AnctionsheetPage } from './anctionsheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnctionsheetPageRoutingModule
  ],
  declarations: [AnctionsheetPage]
})
export class AnctionsheetPageModule {}

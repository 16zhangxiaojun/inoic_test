import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnctionsheetPage } from './anctionsheet.page';

const routes: Routes = [
  {
    path: '',
    component: AnctionsheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnctionsheetPageRoutingModule {}

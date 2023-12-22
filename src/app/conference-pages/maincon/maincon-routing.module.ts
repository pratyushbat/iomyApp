import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainconPage } from './maincon.page';

const routes: Routes = [
  {
    path: '',
    component: MainconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainconPageRoutingModule {}

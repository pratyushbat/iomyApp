import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPopoverPage } from './about-popover.page';

const routes: Routes = [
  {
    path: '',
    component: AboutPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutPopoverPageRoutingModule {}

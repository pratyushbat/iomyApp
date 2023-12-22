import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleFilterPage } from './schedule-filter.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduleFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleFilterPageRoutingModule {}

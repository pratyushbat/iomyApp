import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleFilterPageRoutingModule } from './schedule-filter-routing.module';

import { ScheduleFilterPage } from './schedule-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduleFilterPageRoutingModule
  ],
  declarations: [ScheduleFilterPage]
})
export class ScheduleFilterPageModule {}

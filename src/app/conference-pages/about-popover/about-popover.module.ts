import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPopoverPageRoutingModule } from './about-popover-routing.module';

import { AboutPopoverPage } from './about-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPopoverPageRoutingModule
  ],
  declarations: [AboutPopoverPage]
})
export class AboutPopoverPageModule {}

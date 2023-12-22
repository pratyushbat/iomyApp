import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainconPageRoutingModule } from './maincon-routing.module';

import { MainconPage } from './maincon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainconPageRoutingModule
  ],
  declarations: [MainconPage]
})
export class MainconPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidationPageRoutingModule } from './validation-routing.module';

import { ValidationPage } from './validation.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidationPageRoutingModule,
    BrMaskerModule
  ],
  declarations: [ValidationPage]
})
export class ValidationPageModule {}

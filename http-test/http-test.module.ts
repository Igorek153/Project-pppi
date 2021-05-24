import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HttpTestPageRoutingModule } from './http-test-routing.module';

import { HttpTestPage } from './http-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpTestPageRoutingModule
  ],
  declarations: [HttpTestPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HttpTestPageModule {}

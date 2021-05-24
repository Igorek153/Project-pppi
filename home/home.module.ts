import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {ProductStorageComponent} from '../components/product-storage/product-storage.component';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    
    
  ],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HomePage, ProductStorageComponent],
  
})
export class HomePageModule {}

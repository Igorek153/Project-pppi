import { Component } from '@angular/core';
import {Events} from '../events';
import {DataGetterService, ProductStorage} from '../service/data-getter.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductStorageComponent } from '../components/product-storage/product-storage.component';
import { from } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import { DataExchangerService } from 'src/servece/data-exchanger.service';






@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {
  
  extraData: string;
  storages: ProductStorage[];
  showNew = false;
  showEdit = -1;
  dataFromProducts: string;
  userName: string;
  

  constructor(private dataGetter: DataGetterService,
    // private events: Events,
    private dataExchanger: DataExchangerService,
    private router: Router,
    private route: ActivatedRoute) {
    this.dataGetter.getStorages().subscribe(
      (data) => {
        this.storages = data;
      }
    );
    this.userName = this.dataGetter.getUser();
    }

  ionViewDidEnter() {
    console.log('home');
    this.extraData = this.dataExchanger.getData('myData');
  }
  add() {
    this.showNew = true;
  }

  delete(storage) {
    this.dataGetter.deleteStorage(storage).subscribe(
      res => { 
        this.dataGetter.getStorages().subscribe(
        data => {
          this.storages = data
      }
      );
    }
    );
  }

  addStorage(storage) {
    this.dataGetter.addStorage(storage).subscribe(
      res => { 
        this.dataGetter.getStorages().subscribe(
        data => {
          this.storages = data
      }
      );
    }
    );
    this.showNew = false;
  }
  getData() {
    this.dataExchanger.setData('myData', this.extraData);
    this.router.navigate(['/data-sender']);
  }

}

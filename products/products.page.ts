import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {DataGetterService} from '../service/data-getter.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Events} from '../events';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  strid: number;
  strarea: string;
  products: any[];

  constructor(private dataGetter: DataGetterService,
    private route: ActivatedRoute,
    private router: Router) {
      this.strid = +this.route.snapshot.paramMap.get('id');
    }

  ngOnInit() {
    this.strarea = this.route.snapshot.paramMap.get('strarea');
    this.dataGetter.getProducts(this.strid).subscribe(
      data => {
        this.products = data;
      }
    );
  }

}

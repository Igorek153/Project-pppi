import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Events} from '../events';
import {NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import { DataExchangerService } from 'src/servece/data-exchanger.service';

@Component({
  selector: 'app-data-sender',
  templateUrl: './data-sender.page.html',
  styleUrls: ['./data-sender.page.scss'],
})
export class DataSenderPage implements OnInit {

  textData: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private dataExchanger: DataExchangerService) {
      this.textData = this.dataExchanger.getData('data');
    }

  ngOnInit() {
  }

  passData() {
    this.dataExchanger.setData('myData', this.textData);
    this.router.navigate(['/home']);
  }
}

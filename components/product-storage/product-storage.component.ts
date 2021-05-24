import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { from } from 'rxjs';
import {ProductStorage, DataGetterService} from '../../service/data-getter.service';

@Component({
  selector: 'app-storage',
  templateUrl: './product-storage.component.html',
  styleUrls: ['./product-storage.component.scss'],
})

export class ProductStorageComponent implements OnInit {

  @Input() pStorage: ProductStorage;
  @Input() isNew: boolean;
  @Output() addStorage = new EventEmitter();
  @Output() cancelAddingStorage = new EventEmitter();
  title: string;


  constructor(private dataGetter: DataGetterService) { }

  ngOnInit() {
  if (this.isNew){
    this.pStorage = {
      id: null,
      area: null,
      name: '',
      security: null,
      category: ''
    },
    this.title = 'New storage';
  }
}
  addNew() {
    if (this.isNew) {
      this.addStorage.emit(this.pStorage);
    }
  }

  cancelAdding() {
    if (this.isNew) {
      this.cancelAddingStorage.emit();
    }
  }

  saveStorage() {
    this.dataGetter.editStorage(this.pStorage).subscribe(
      data => console.log(data)
    );
  }

}


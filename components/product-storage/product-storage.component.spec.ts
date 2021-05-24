import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductStorageComponent } from './product-storage.component';

describe('ProductStorageComponent', () => {
  let component: ProductStorageComponent;
  let fixture: ComponentFixture<ProductStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductStorageComponent ],
      imports: [IonicModule.forRoot()],
      
    }).compileComponents();

    fixture = TestBed.createComponent(ProductStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

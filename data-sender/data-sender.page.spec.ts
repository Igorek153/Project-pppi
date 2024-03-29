import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataSenderPage } from './data-sender.page';

describe('DataSenderPage', () => {
  let component: DataSenderPage;
  let fixture: ComponentFixture<DataSenderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSenderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DataSenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

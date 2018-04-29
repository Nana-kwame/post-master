import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDeliveryServiceComponent } from './find-delivery-service.component';

describe('FindDeliveryServiceComponent', () => {
  let component: FindDeliveryServiceComponent;
  let fixture: ComponentFixture<FindDeliveryServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDeliveryServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDeliveryServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

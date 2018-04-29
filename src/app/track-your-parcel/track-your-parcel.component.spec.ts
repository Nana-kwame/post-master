import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackYourParcelComponent } from './track-your-parcel.component';

describe('TrackYourParcelComponent', () => {
  let component: TrackYourParcelComponent;
  let fixture: ComponentFixture<TrackYourParcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackYourParcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackYourParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

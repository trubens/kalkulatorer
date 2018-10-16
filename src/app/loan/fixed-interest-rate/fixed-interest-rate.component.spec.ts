import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedInterestRateComponent } from './fixed-interest-rate.component';

describe('FixedInterestRateComponent', () => {
  let component: FixedInterestRateComponent;
  let fixture: ComponentFixture<FixedInterestRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedInterestRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedInterestRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

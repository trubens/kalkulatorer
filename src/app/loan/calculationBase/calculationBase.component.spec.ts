import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationBaseComponent } from './calculationBase.component';

describe('CalculationBaseComponent', () => {
  let component: CalculationBaseComponent;
  let fixture: ComponentFixture<CalculationBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

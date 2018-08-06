import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraRepaymentComponent } from './extra-repayment.component';

describe('ExtraRepaymentComponent', () => {
  let component: ExtraRepaymentComponent;
  let fixture: ComponentFixture<ExtraRepaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraRepaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraRepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingloanComponent } from './remainingloan.component';

describe('RemainingloanComponent', () => {
  let component: RemainingloanComponent;
  let fixture: ComponentFixture<RemainingloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { LoanService } from './seri./loan.service';

describe('SerieLoanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoanService]
    });
  });

  it('should be created', inject([LoanService], (service: LoanService) => {
    expect(service).toBeTruthy();
  }));
});

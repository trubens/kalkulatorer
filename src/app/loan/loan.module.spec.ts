import { LoanModule } from './Loan.module';

describe('LoanModule', () => {
  let loanModule: LoanModule;

  beforeEach(() => {
    loanModule = new LoanModule();
  });

  it('should create an instance', () => {
    expect(LoanModule).toBeTruthy();
  });
});

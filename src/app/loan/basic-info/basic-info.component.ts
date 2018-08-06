import { Component } from '@angular/core';
import { Repayment } from '../repayment';
import { LoanService } from '../loan.service';
import { getBaseAndExtraRepayment } from '../loan.reducer';
import { AppStates } from '../../app.states';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent {
    public result: Repayment = new Repayment();
    public resultWithoutExtraPayment: Repayment = new Repayment();
    public timeSaved = () => this.result.payments.length - this.result.payments.find(p => Math.round(p.sumLeft) == 0).month;
  
    constructor(private loanService: LoanService, private store: Store<AppStates>) {
      this.store.select(getBaseAndExtraRepayment).subscribe(({calculationBase, extraRepayment}) => {
        this.result = this.loanService.getAmortizedMortage(calculationBase, extraRepayment);
        this.resultWithoutExtraPayment = this.loanService.getAmortizedMortage(calculationBase);
      });
    }
}
  
import { Component, OnInit } from '@angular/core';
import { AppStates } from '../../app.states';
import { Store } from '@ngrx/store';
import { Repayment } from '../repayment';
import { getCalculationBase } from '../loan.reducer';
import { LoanService } from '../loan.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  public result: Repayment = new Repayment();

  constructor(private loanService: LoanService, private store: Store<AppStates>) {
    this.store.select(getCalculationBase).subscribe(observer => {
      this.result = this.loanService.getAmortizedMortage(observer);
    });
  }
  

}

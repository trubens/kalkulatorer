import { Component, OnInit } from '@angular/core'; 
import { Repayment } from '../repayment';
import { LoanService } from '../loan.service';
import { getBaseAndExtraRepayment } from '../loan.reducer';
import { AppStates } from '../../app.states';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-percentages',
  templateUrl: './percentages.component.html',
  styleUrls: ['./percentages.component.css']
})
export class PercentagesComponent implements OnInit {
    public result: Repayment = new Repayment();

    constructor(private loanService: LoanService, private store: Store<AppStates>) {
      this.store.select(getBaseAndExtraRepayment).subscribe(({calculationBase, extraRepayment}) => {
        this.result = this.loanService.getAmortizedMortage(calculationBase, extraRepayment);
      });
    }

    ngOnInit(){}
}
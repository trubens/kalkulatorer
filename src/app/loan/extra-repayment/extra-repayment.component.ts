import { Component } from '@angular/core';
import { ExtraRepayment } from '../extra-repayment';
import { AppStates } from '../../app.states';
import { Store } from '@ngrx/store';
import * as fromActions from '../../actions';

@Component({
  selector: 'app-extra-repayment',
  templateUrl: './extra-repayment.component.html',
  styleUrls: ['./extra-repayment.component.css']
})
export class ExtraRepaymentComponent {
  model: ExtraRepayment;

  constructor(private store: Store<AppStates>) {
    this.model = new ExtraRepayment();
  }
  

  onChange() {
    // FIX this!!
    setTimeout(() => this.store.dispatch(new fromActions.LoanSetExtraPaymentAction(this.model)),1);
    
  }

}

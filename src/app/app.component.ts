import { Component } from '@angular/core';
import { LoanService } from './loan/loan.service';
import { CalculationBase } from './loan/calculationBase';
import { ExtraRepayment } from './loan/extra-repayment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [LoanService],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kalkulatorer';
  calculationBase = new CalculationBase();
  extraRepayment = new ExtraRepayment();
}

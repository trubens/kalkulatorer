import { Injectable } from '@angular/core';
import { CalculationBase } from './calculationBase';
import { Repayment } from './repayment';
import { RepaymentMonth } from './repayment-month';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }

  /*
   * Annuitetslån 
   */
  getAmortizedMortage(calculationBase: CalculationBase) {
    var result = new Repayment();
    var montlyInterestRate = calculationBase.interestRate / 100 / 12;

    var monthlyPayment = 
      calculationBase.sumLeft * (
        (montlyInterestRate * Math.pow(1 + montlyInterestRate, calculationBase.paymentTimeLeft))
        /
        (Math.pow(1 + montlyInterestRate, calculationBase.paymentTimeLeft) - 1)
      )
    
    for(var i = 0; i < calculationBase.paymentTimeLeft; i++) {
      result.payment.push(new RepaymentMonth(i, monthlyPayment));
    }
  }
}

import { Injectable } from '@angular/core';
import { CalculationBase } from './calculationBase';
import { Repayment } from './repayment';
import { RepaymentMonth } from './repayment-month';
import { ExtraRepayment } from './extra-repayment';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }

  /*
   * Annuitetslån 
   */
  getAmortizedMortage(calculationBase: CalculationBase, extraRepayment: ExtraRepayment = null) : Repayment {
    var result = new Repayment();
    var montlyInterestRate = calculationBase.interestRate / 100 / 12;

    var sumLeft = calculationBase.sumLeft;

    result.startSum = calculationBase.sumLeft;

    for(var i = 0; i < calculationBase.paymentTimeLeft; i++) {
      var extraPaymentThisMonth = 0;

      if(extraRepayment !== null) {
        extraPaymentThisMonth = Math.max(0, Math.min(extraRepayment.monthlyPayment, sumLeft));
        sumLeft =  sumLeft - extraPaymentThisMonth;
      }

      var monthlyPayment = Math.max(
          sumLeft * (
            (montlyInterestRate * Math.pow(1 + montlyInterestRate, calculationBase.paymentTimeLeft - i))
            /
            (Math.pow(1 + montlyInterestRate, calculationBase.paymentTimeLeft - i) - 1)
        ), 0);

      var interestPayment = Math.max(sumLeft * montlyInterestRate, 0);
      var repayment = Math.max(monthlyPayment - interestPayment, 0);

      sumLeft = Math.max(sumLeft - repayment, 0);

      result.payments.push(new RepaymentMonth(i + 1, monthlyPayment + (extraRepayment ? extraPaymentThisMonth : 0), repayment, interestPayment, sumLeft));
    }

    return result
  }
}

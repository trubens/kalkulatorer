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

    var sumLeft = calculationBase.sumLeft;
    var montlyInterestRate = calculationBase.interestRate / 100 / 12;

    result.startSum = calculationBase.sumLeft;

    for(var i = 0; i < calculationBase.months; i++) {
      var amount = this.getMonthlyPayment(calculationBase, sumLeft, montlyInterestRate, i);

      var extraPaymentThisMonth = 0;

      if(extraRepayment !== null) {
        if(extraRepayment.isEvenExtra) {
          extraPaymentThisMonth = Math.max(0, Math.min(extraRepayment.amount, sumLeft));
        }
        else if(extraRepayment.isEvenSum) {
          extraPaymentThisMonth = Math.max(0, extraRepayment.amount - amount);
          
          console.log(extraPaymentThisMonth);
        }

        extraPaymentThisMonth = Math.min(sumLeft, extraPaymentThisMonth);
        sumLeft =  sumLeft - extraPaymentThisMonth;
      }

      var interestPayment = Math.max(sumLeft * montlyInterestRate, 0);
      var repayment = Math.max(amount - interestPayment, 0);

      sumLeft = Math.max(sumLeft - repayment, 0);

      result.payments.push(new RepaymentMonth(i + 1, amount + (extraRepayment ? extraPaymentThisMonth : 0), repayment + extraPaymentThisMonth, interestPayment, sumLeft));
    }

    return result
  }

  getMonthlyPayment(calculationBase: CalculationBase, sumLeft : number, montlyInterestRate : number, month : number) : number {
    if(calculationBase.isAmortized) {
      return Math.max(
        sumLeft * (
          (montlyInterestRate * Math.pow(1 + montlyInterestRate, calculationBase.months - month))
          /
          (Math.pow(1 + montlyInterestRate, calculationBase.months - month) - 1)
      ), 0);
    }
    
    return month === calculationBase.months ? 0 : Math.max(sumLeft / (calculationBase.months - month) + montlyInterestRate * sumLeft, 0);
  }
}

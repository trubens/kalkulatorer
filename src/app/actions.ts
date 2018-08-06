import { Action } from '@ngrx/store';
import { CalculationBase } from './loan/calculationBase';
import { ExtraRepayment } from './loan/extra-repayment';

export const LOAN_SET_CALCULATION_BASE = 'LOAN_SET_CALCULATION_BASE';
export const LOAN_SET_EXTRA_PAYMENT = 'LOAN_SET_EXTRA_PAYMENT';

export class LoanSetCalculationBaseAction implements Action {
  public readonly type = LOAN_SET_CALCULATION_BASE;

  constructor(public payload: CalculationBase) {}
}

export class LoanSetExtraPaymentAction implements Action {
  public readonly type = LOAN_SET_EXTRA_PAYMENT;

  constructor(public payload: ExtraRepayment) {}
}

export type All = LoanSetCalculationBaseAction | LoanSetExtraPaymentAction;
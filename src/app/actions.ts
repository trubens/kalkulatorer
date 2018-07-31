import { Action } from '@ngrx/store';
import { CalculationBase } from './loan/calculationBase';
export const LOAN_SET_CALCULATION_BASE = 'LOAN_SET_CALCULATION_BASE';

export class LoanSetCalculationBaseAction implements Action {
  public readonly type = LOAN_SET_CALCULATION_BASE;

  constructor(public payload: CalculationBase) {}
}

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions';
import { LoanState } from '../app.states';
import { CalculationBase } from './calculationBase';
import { ExtraRepayment } from './extra-repayment';
import { combineLatest } from '../../../node_modules/rxjs';

export const initialState: LoanState = { calculationBase: new CalculationBase(), extraRepayment: new ExtraRepayment()};

export function reducer(state = initialState, action: fromActions.All): LoanState {
  switch(action.type) {
    case fromActions.LOAN_SET_CALCULATION_BASE: {
      return { ...state, calculationBase: action.payload.clone() };
    }
    case fromActions.LOAN_SET_EXTRA_PAYMENT: {
      return { ...state, extraRepayment: action.payload.clone() };
    }
    default: {
      return state;
    }
  }	
}

export const getLoanState = createFeatureSelector<LoanState>('loanState');

export const getCalculationBase = createSelector(
    getLoanState, 
    (state: LoanState) => state.calculationBase 
); 

export const getExtraRepayment = createSelector(
  getLoanState, 
  (state: LoanState) => state.extraRepayment 
);

export const getBaseAndExtraRepayment = createSelector(
  getLoanState, 
  (state: LoanState) => ({calculationBase: state.calculationBase, extraRepayment: state.extraRepayment })
);
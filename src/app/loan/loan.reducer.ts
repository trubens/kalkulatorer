import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions';
import { LoanState } from '../app.states';
import { CalculationBase } from './calculationBase';

export const initialState: LoanState = { calculationBase: new CalculationBase()};

export function reducer(state = initialState, action: fromActions.LoanSetCalculationBaseAction): LoanState {
  switch(action.type) {
    case fromActions.LOAN_SET_CALCULATION_BASE: {
      return { calculationBase: action.payload.clone() };
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
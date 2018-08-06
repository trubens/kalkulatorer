import { ActionReducerMap, ActionReducer, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStates, LoanState } from './app.states';
import * as loanReducer from './loan/loan.reducer';
import { All } from './actions';

export const reducers: ActionReducerMap<AppStates> = {
  loanState: loanReducer.reducer
};

export function logger(reducer: ActionReducer<AppStates>): ActionReducer<AppStates> {
  return function(state: AppStates, action: All): AppStates {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppStates>[] = false
  ? [logger]
  : []; 


export const getLoanState = createFeatureSelector<LoanState>('articleState');

export const getCalculationBase = createSelector(
    getLoanState, 
    (state: LoanState) => state.calculationBase 
); 
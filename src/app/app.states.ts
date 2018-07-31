import { CalculationBase } from "./loan/calculationBase";

export interface AppStates {
	loanState: LoanState;
}

export interface LoanState {
	calculationBase: CalculationBase;
}
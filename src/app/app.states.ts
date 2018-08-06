import { CalculationBase } from "./loan/calculationBase";
import { ExtraRepayment } from "./loan/extra-repayment";

export interface AppStates {
	loanState: LoanState;
}

export interface LoanState {
	calculationBase: CalculationBase;
	extraRepayment: ExtraRepayment;
}
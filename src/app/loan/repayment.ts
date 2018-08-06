import { RepaymentMonth } from "./repayment-month";

export class Repayment {
    public startSum = 0;

    constructor(public payments: RepaymentMonth[] = []){
    }

    public get totalPayments() {
        return this.payments
            .map(payment => payment.totalPayment)
            .reduce((sum, current) => sum + current);
    }

    public get totalInterest() {
        return this.payments
            .map(payment => payment.interest)
            .reduce((sum, current) => sum + current);
    }
}

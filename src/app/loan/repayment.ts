import { RepaymentMonth } from "./repayment-month";
import { summaryFileName } from "@angular/compiler/src/aot/util";

export class Repayment {
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

    public get startSum() {
        return this.payments
            .map(payment => payment.repayment)
            .reduce((sum, current) => sum + current);
    }
}

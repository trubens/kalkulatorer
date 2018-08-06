import { IClonable } from "./iclonable";

export class CalculationBase implements IClonable {
    constructor(
        public totalSum: number = 65000,
        public sumLeft: number = 50000,
        public paymentTime: number = 48,
        public paymentTimeLeft: number = 48,
        public interestRate: number = 2,
        public typeOfLoan: string = "amortized"
    ) { }

    clone() {
        return new CalculationBase(
            this.totalSum,
            this.sumLeft,
            this.paymentTime,
            this.paymentTimeLeft,
            this.interestRate,
            this.typeOfLoan
        );
    }
}

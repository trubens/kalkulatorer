export class CalculationBase {
    constructor(
        public totalSum: number = 65000,
        public sumLeft: number = 50000,
        public paymentTime: number = 48,
        public paymentTimeLeft: number = 48,
        public interestRate: number = 2,
        public typeOfLoan: string = "amortized",
        public extraPayment: number = 0,
    ) { }

    clone() {
        return new CalculationBase(
            this.totalSum,
            this.sumLeft,
            this.paymentTime,
            this.paymentTimeLeft,
            this.interestRate,
            this.typeOfLoan,
            this.extraPayment
        );
    }
}

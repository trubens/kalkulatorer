export class CalculationBase {
    constructor(
        public totalSum: number = 0,
        public sumLeft: number = 0,
        public paymentTime: number = 0,
        public paymentTimeLeft: number = 0,
        public interestRate: number = 0,
    ) { }
}

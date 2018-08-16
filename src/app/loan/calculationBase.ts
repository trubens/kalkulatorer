import { IClonable } from "./iclonable";

const AMORTIZED = 'amortized'
const YEAR = 'year'

export class CalculationBase implements IClonable {
    constructor(
        public totalSum: number = 2000000,
        public sumLeft: number = 2000000,
        public paymentTime: number = 25,
        public paymentTimeLeft: number = 25,
        public interestRate: number = 2,
        public typeOfLoan: string = AMORTIZED,
        public timeUnit: string = YEAR
    ) { }

    public get isAmortized() {
        return this.typeOfLoan === AMORTIZED;
    }

    public get months() {
        return this.timeUnit === YEAR ? this.paymentTime * 12 : this.paymentTime;
    }

    clone() {
        return new CalculationBase(
            this.totalSum,
            this.sumLeft,
            this.paymentTime,
            this.paymentTimeLeft,
            this.interestRate,
            this.typeOfLoan,
            this.timeUnit
        );
    }
}

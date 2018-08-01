export class RepaymentMonth {
    constructor(
        public month: number,
        public totalPayment: number,
        public repayment: number,
        public interest: number,
        public sumLeft: number
    ) {}
}

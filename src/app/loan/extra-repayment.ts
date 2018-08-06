import { IClonable } from "./iclonable";

export class ExtraRepayment implements IClonable {
        constructor(
            public monthlyPayment: number = 0
        ) { }
    
        clone() {
            return new ExtraRepayment(
                this.monthlyPayment,
            );
        }
        
}

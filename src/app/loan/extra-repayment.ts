import { IClonable } from "./iclonable";

const METHOD_EVEN_SUM = 'EVEN SUM';
const METHOD_EVEN_EXTRA = 'EVEN EXTRA'

export class ExtraRepayment implements IClonable {
        constructor(
            public amount: number = 0,
            public method = METHOD_EVEN_SUM
        ) { }

        get isEvenSum() {
            return this.method === METHOD_EVEN_SUM;
        }
    
        get isEvenExtra() {
            return this.method === METHOD_EVEN_EXTRA;
        }
    
        clone() {
            return new ExtraRepayment(
                this.amount,
            );
        }
        
}

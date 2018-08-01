import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CalculationBase } from '../calculationBase';
import { AppStates } from '../../app.states';
import * as fromActions from '../../actions';

@Component({
  selector: 'app-calculationBase',
  templateUrl: './calculationBase.component.html',
  styleUrls: ['./calculationBase.component.css']
})

export class CalculationBaseComponent implements OnInit {
  model: CalculationBase;

  constructor(private store: Store<AppStates>) {
    this.model = new CalculationBase();
  }
  

  onChange(something) {
    console.log(something);

    // FIX this!!
    setTimeout(() => this.store.dispatch(new fromActions.LoanSetCalculationBaseAction(this.model)),1);
    
  }

  ngOnInit() {
  }

}

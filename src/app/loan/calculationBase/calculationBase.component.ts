import { Component, OnInit } from '@angular/core';
import { CalculationBase } from '../calculationBase';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-calculationBase',
  templateUrl: './calculationBase.component.html',
  styleUrls: ['./calculationBase.component.css']
})

export class CalculationBaseComponent implements OnInit {
  model: CalculationBase;

  constructor(public loanService: LoanService) {
    this.model = new CalculationBase(0, 0);
  }

  calculate() {
    this.loanService.getAmortizedMortage(this.model);
  }

  ngOnInit() {
  }

}

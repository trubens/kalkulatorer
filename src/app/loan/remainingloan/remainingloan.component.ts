import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppStates } from '../../app.states';
import { Store } from '@ngrx/store';
import { Repayment } from '../repayment';
import { getBaseAndExtraRepayment, getCalculationBase, getExtraRepayment } from '../loan.reducer';
import { LoanService } from '../loan.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-remainingloan',
  templateUrl: './remainingloan.component.html',
  styleUrls: ['./remainingloan.component.css']
})
export class RemainingloanComponent implements OnInit {
  public result: Repayment = new Repayment();
  public resultWithoutExtraPayment: Repayment = new Repayment();
  public chart = null;
  @ViewChild('myChart') chartElement: ElementRef;

  constructor(private loanService: LoanService, private store: Store<AppStates>) {
    this.store.select(getBaseAndExtraRepayment).subscribe(({calculationBase, extraRepayment}) => {
      this.result = this.loanService.getAmortizedMortage(calculationBase, extraRepayment);
      this.resultWithoutExtraPayment = this.loanService.getAmortizedMortage(calculationBase);

      
      if(this.chart) {
        this.chart.data.labels = this.result.payments.map(month => month.month);
        this.chart.data.datasets[0].data = this.result.payments.map(month => month.sumLeft);
        this.chart.data.datasets[1].data = this.resultWithoutExtraPayment.payments.map(month => month.sumLeft);
        this.chart.update();
      }
    });
  }

  getRepaymentWithoutExtraPayment(repayment) {
    var repaymentWithoutExtraPayment = repayment.clone();
    repaymentWithoutExtraPayment.extraPayment = 0;
    return repaymentWithoutExtraPayment;
  }
  
  ngOnInit() {
    this.chart = new Chart(this.chartElement.nativeElement, {
      type: 'line',
      data: {
        labels: this.result.payments.map(month => 'Termin ' + month.month),
        datasets: [{
          borderColor: '#14bdcc',
          data: this.result.payments.map(month => month.sumLeft),
          label: 'Gjenstående lån',
          datalabels: {
            anchor: 'end'
          }
        },
        {
          borderColor: '#999',
          data: this.resultWithoutExtraPayment.payments.map(month => month.sumLeft),
          label: 'Gjenstående lån uten ekstra innbetaling',
          datalabels: {
            anchor: 'end'
          }
        },
      ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        barThickness: 0,
        legend: {
          display: true,
          position: 'bottom'
        }
        }
      
    });
  }
}

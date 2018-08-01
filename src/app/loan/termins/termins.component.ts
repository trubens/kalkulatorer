import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppStates } from '../../app.states';
import { Store } from '@ngrx/store';
import { Repayment } from '../repayment';
import { getCalculationBase } from '../loan.reducer';
import { LoanService } from '../loan.service';
import { Chart } from 'chart.js';
import { RepaymentMonth } from '../repayment-month';

@Component({
  selector: 'app-termins',
  templateUrl: './termins.component.html',
  styleUrls: ['./termins.component.css']
})
export class TerminsComponent implements OnInit {
  public result: Repayment = new Repayment();
  public chart = null;
  public showRepaymentPlan = false;
  displayedColumns: string[] = ['month', 'totalPayment', 'repayment', 'interest', 'sumLeft'];
  @ViewChild('myChart') chartElement: ElementRef;

  constructor(private loanService: LoanService, private store: Store<AppStates>) {
    this.store.select(getCalculationBase).subscribe(observer => {
      this.result = this.loanService.getAmortizedMortage(observer);
      
      if(this.chart) {
        this.chart.data.labels = this.result.payments.map(month => month.month);
        this.chart.data.datasets[0].data = this.result.payments.map(month => month.repayment);
        this.chart.data.datasets[1].data = this.result.payments.map(month => month.interest);
        this.chart.update();
      }
    });
  }
  
  ngOnInit() {
    this.chart = new Chart(this.chartElement.nativeElement, {
      type: 'bar',
      data: {
        labels: this.result.payments.map(month => 'Termin ' + month.month),
        datasets: [{
          backgroundColor: '#3f51b5',
          data: this.result.payments.map(month => month.repayment),
          label: 'Avdrag',
          datalabels: {
            anchor: 'end'
          }
        },
        {
          backgroundColor: '#ff0000',
          data: this.result.payments.map(month => month.interest),
          datalabels: {
            anchor: 'end'
          },
          label: 'Renter'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        barThickness: 0,
        legend: {
          display: true,
          position: 'bottom'
        },
        scales: {
          xAxes: [{
              stacked: true
          }],
          yAxes: [{
              stacked: true
          }]
        }
      }
    });
  }
}

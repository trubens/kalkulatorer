import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationBaseComponent } from './calculationBase/calculationBase.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatButtonModule, MatTableModule, MatSlideToggleModule, MatButtonToggleModule, MatSelectModule } from '@angular/material';
import { TerminsComponent } from './termins/termins.component';
import { LoanService } from './loan.service';
import { RemainingloanComponent } from './remainingloan/remainingloan.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { ExtraRepaymentComponent } from './extra-repayment/extra-repayment.component';
import { PercentagesComponent } from './percentages/percentages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSelectModule
  ],
  exports: [
    CalculationBaseComponent, TerminsComponent, RemainingloanComponent, BasicInfoComponent, ExtraRepaymentComponent
  ],
  providers: [LoanService],
  declarations: [CalculationBaseComponent, TerminsComponent, RemainingloanComponent, BasicInfoComponent, ExtraRepaymentComponent, PercentagesComponent]
})
export class LoanModule { }

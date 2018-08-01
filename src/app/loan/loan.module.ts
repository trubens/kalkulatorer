import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationBaseComponent } from './calculationBase/calculationBase.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatButtonModule, MatTableModule, MatSlideToggleModule, MatButtonToggleModule } from '@angular/material';
import { TerminsComponent } from './termins/termins.component';
import { LoanService } from './loan.service';
import { RemainingloanComponent } from './remainingloan/remainingloan.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatButtonToggleModule
  ],
  exports: [
    CalculationBaseComponent, TerminsComponent, RemainingloanComponent
  ],
  providers: [LoanService],
  declarations: [CalculationBaseComponent, TerminsComponent, RemainingloanComponent]
})
export class LoanModule { }

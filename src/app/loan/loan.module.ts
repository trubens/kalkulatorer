import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationBaseComponent } from './calculationBase/calculationBase.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { ResultComponent } from './result/result.component';
import { LoanService } from './loan.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    CalculationBaseComponent, ResultComponent
  ],
  providers: [LoanService],
  declarations: [CalculationBaseComponent, ResultComponent]
})
export class LoanModule { }

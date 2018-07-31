import { Component } from '@angular/core';
import { LoanService } from './loan/loan.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [LoanService],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kalkulatorer';
}

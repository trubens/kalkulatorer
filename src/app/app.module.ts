import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { LoanModule } from './loan/loan.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { MatToolbarModule } from '../../node_modules/@angular/material';

registerLocaleData(localeFr, 'nb');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    LoanModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

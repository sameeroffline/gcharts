import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { Chart1Component } from './chart1/chart1.component';

@NgModule({
  declarations: [
    AppComponent,
    Chart1Component
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardFiltersComponent } from './components/dashboard-filters/dashboard-filters.component';
import { DashboardTableComponent } from './components/dashboard-table/dashboard-table.component';
import { DashboardCountryStatisticModalComponent } from './components/dashboard-country-statistic-modal/dashboard-country-statistic-modal.component';
import { DashboardChartComponent } from './components/dashboard-chart/dashboard-chart.component';

import { DashboardService } from './services/dashboard.service';
import { DashboardDataService } from './services/dashboard-data.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardFiltersComponent,
    DashboardTableComponent,
    DashboardCountryStatisticModalComponent,
    DashboardFiltersComponent,
    DashboardChartComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DashboardService,
    DashboardDataService,
  ],
  entryComponents: [
    DashboardCountryStatisticModalComponent
  ]
})
export class DashboardModule { }

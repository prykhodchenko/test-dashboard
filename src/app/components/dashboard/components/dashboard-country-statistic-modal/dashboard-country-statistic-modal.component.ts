import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashboardDataService } from '../../services/dashboard-data.service';
import { forkJoin } from 'rxjs'
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-dashboard-country-statistic-modal',
  templateUrl: './dashboard-country-statistic-modal.component.html',
  styleUrls: ['./dashboard-country-statistic-modal.component.scss']
})
export class DashboardCountryStatisticModalComponent implements OnInit {
  public totalCases: any;
  public deceasedCases: any;
  public recoverdCases: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dashboardDataService: DashboardDataService
   ) {}

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    return forkJoin([
      this.dashboardDataService.weeklyRegionalTotalCases(this.data.countryCode),
      this.dashboardDataService.weeklyRegionalDeceasedCases(this.data.countryCode),
      this.dashboardDataService.getWeeklyRegionalRecoverdCases(this.data.countryCode)
      ])
      .pipe(tap(console.log))
      .subscribe(res => {
        this.totalCases = res[0].data;
        this.deceasedCases = res[1].data;
        this.recoverdCases = res[2].data;
      });
  }

}

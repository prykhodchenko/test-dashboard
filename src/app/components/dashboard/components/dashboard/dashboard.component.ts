import { Component, OnInit } from '@angular/core'
import {DashboardDataService} from '../../services/dashboard-data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public countriesList: any;
  public filteredStatistic: any;
  public countries: {} = {};

  private statistic: any;
  private filtersData: any = null;


  constructor(
    private dashboardDataService: DashboardDataService
  ) { }

  ngOnInit(): void {
    this.dashboardDataService.getStatistics()
      .subscribe(
        (response: any) => {
          this.statistic = response.data;

          this.applyFilters();
        });

    this.dashboardDataService.getCountriesList()
      .subscribe(
        (response: any) => {
          this.countries = response.data;
          this.countriesList = Object.values(this.countries);
        }
      );
  }

  public getFiltersData(data: any) {
    this.filtersData = data;

    this.applyFilters();
  }

  private applyFilters(): void {
    let filteredData: any;
    this.filteredStatistic = null;


    if (!this.filtersData || !this.filtersData?.country || !this.filtersData?.date) {
      filteredData = this.statistic ? [...this.statistic] : null;
    }

    if (this.filtersData?.country) {
      filteredData = this.statistic.filter((item: any) => {
        return this.filtersData.country.find((country: string) => country === item.country)
      });
    }

    if (this.filtersData?.date) {
      ///no api for this part :(
    }

    this.filteredStatistic = filteredData;
  }
}

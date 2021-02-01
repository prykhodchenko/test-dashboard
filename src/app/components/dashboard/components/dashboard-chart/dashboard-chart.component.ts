import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss']
})
export class DashboardChartComponent implements OnInit {
  @Input() totalCases: any;
  @Input() deceasedCases: any;
  @Input() recoverdCases: any;

  public multi: any = [];
  public view: any[] = [ 760 ];
  public legend: boolean = true;
  public legendPosition: string = 'below';
  public showLabels: boolean = true;
  public animations: boolean = true;
  public xAxis: boolean = true;
  public yAxis: boolean = true;
  public showYAxisLabel: boolean = true;
  public showXAxisLabel: boolean = true;
  public xAxisLabel: string = 'Week';
  public yAxisLabel: string = 'Count';
  public timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB']
  };

  constructor() { }

  ngOnInit(): void {
    this.generateChartData(this.totalCases, 'Total Cases');
    this.generateChartData(this.deceasedCases, 'Deceased Cases');
    this.generateChartData(this.recoverdCases, 'Recovered Cases');
  }

  private generateChartData(value: any, name: any) {
    const series: any[] = [];

    Object.keys(value).forEach(key => {
      series.push({
        name: key,
        value: value[key]
      })
    })

    this.multi.push({
      name,
      series
    });
  }

}

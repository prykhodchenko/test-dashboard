import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DashboardCountryStatisticModalComponent } from '../dashboard-country-statistic-modal/dashboard-country-statistic-modal.component';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit, OnChanges {
  @Input() statistic: any[] | undefined;
  @Input() countries: any;

  public displayedColumns: string[] = ['regionName', 'casesCount', 'critical', 'deceasedCount', 'recoveredCount'];
  public dataSource: any;

  private paginator: MatPaginator|undefined;
  private sort: MatSort|undefined;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnChanges(changes: SimpleChanges): void{
    if (changes.statistic) {
      this.dataSource = new MatTableDataSource(this.statistic);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }

  ngAfterViewInit() {
  }

  ngOnInit(): void {
  }

  public getTotalRecovered(): number {
    return this.countTotalValue('recoveredCount');
  }

  public getTotalDeaths(): number {
    return this.countTotalValue('deceasedCount');
  }

  public getTotalCritical(): number {
    return this.countTotalValue('critical');
  }

  public getTotalConfirmed(): number {
    return this.countTotalValue('casesCount');
  }

  public countTotalValue(key: string): number {
    if (this.statistic) {
      return this.statistic.map((t: any)=> {
        if (key === 'deceasedCount') {
          return t;
        }

        return t[key];
      })
      .reduce((acc: number, value: any) => {
        if ( key === 'deceasedCount') {
          return acc + (value[key] + value[key] * 100 / value['casesCount'])
        }

        return acc + value;
      }, 0);
    }

    return 0;
  }

  public showCountryDiagram(regionName: string): void {
    const countryCode = this.getKeyByValue(this.countries, regionName);

    this.dialog.open(DashboardCountryStatisticModalComponent, {
      width: '800px',
      height: 'auto',
      data: {
        countryCode,
        regionName
      }
    });
  }

  private getKeyByValue(object: any, value: string) {
    return Object.keys(object).find(key => object[key] === value);
  }

  private setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

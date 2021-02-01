import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';


@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  constructor(
    private http: HttpService
  ) { }

  public getWeeklyRegionalRecoverdCases(param: string): Observable<any> {
    return this.http.getV2(`/weeklyRegionalRecoverdCases/${param}`);
  }

  public weeklyRegionalDeceasedCases(param: string): Observable<any> {
    return this.http.getV2(`/weeklyRegionalDeceasedCases/${param}`);
  }

  public weeklyRegionalTotalCases(param: string): Observable<any> {
    return this.http.getV2(`/weeklyRegionalTotalCases/${param}`);
  }
 
  public getStatistics(): Observable<null> {
    return this.http.getV2('/globalData');
  }

  public getCountriesList(): Observable<any> {
    return this.http.getV2('/countries');
  }
}


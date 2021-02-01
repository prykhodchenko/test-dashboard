import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private http: HttpClient
  ) { }

  public getV1(url: string, params: {} = {}): Observable<any> {
    return this.http.get(`https://covid-19-world-data-by-zt.p.rapidapi.com${url}`, params)
      .pipe(
        catchError(err => {
          throw Error(err.message);
        })
      );
  }

  public getV2(url: string, params: {} = {}):  Observable<any> {
    return this.http.get(`https://covid-19-global-tracker-with-regional-data.p.rapidapi.com/api/covid${url}`, params)
    .pipe(
      catchError(err => {
        throw Error(err.message);
      })
    );
  }
}

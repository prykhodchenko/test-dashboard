import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseInterceptor implements HttpInterceptor {
  constructor(
    public injector: Injector
   ) { }

  //DB https://rapidapi.com/popofibo/api/covid-19-global-tracker-with-regional-data

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({ 
      headers: req.headers.set("x-rapidapi-key", "74b2a3571emsh1f09c6166a5c976p180cb6jsn6fd094c0a9f7")
    });

    return next.handle(modifiedReq);
  }
}

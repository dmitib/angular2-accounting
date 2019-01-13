import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Bill } from '../models/bill.model';

@Injectable()
export class BillService {
  constructor(private http: HttpClient) {}

  getBill(): Observable<Bill> {
    return this.http.get('http://localhost:3000/bill')
      .map((res: any) => res);
  }

  getCurrency(base: string = 'RUB'): Observable<any> {
    return this.http.get(`http://localhost:3000/currency?base=${base}`)
      .map((res: any) => res);
  }
}

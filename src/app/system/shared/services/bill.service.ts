import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Bill } from '../models/bill.model';
import { BaseApi } from 'src/app/shared/core/base-api';

@Injectable()
export class BillService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getBill(): Observable<Bill> {
    return this.get('bill');
  }

  getCurrency(base: string = 'RUB'): Observable<any> {
    return this.get(`currency?base=${base}`);
  }
}

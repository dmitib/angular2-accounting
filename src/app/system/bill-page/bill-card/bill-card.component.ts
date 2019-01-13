import { Component, OnInit, Input } from '@angular/core';

import { Bill } from '../../shared/models/bill.model';

@Component({
  selector: 'acc-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill: Bill;
  @Input() currency: any;

  dollar: number;
  rub: number;

  constructor() { }

  ngOnInit() {
    const { rates } = this.currency;
    this.dollar = rates['USD'] * this.bill.value;
    this.rub = rates['RUB'] * this.bill.value;
    console.log(rates['RUB']);
    console.log(rates['USD']);
  }

}

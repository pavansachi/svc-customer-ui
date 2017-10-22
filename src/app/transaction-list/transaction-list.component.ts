import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  constructor() { }

  transactions = [
    {
      "transaction": "Transaction 1",
      "date": "10-10-2016",
      "amount": -10
    },
    {
      "transaction": "Transaction 2",
      "date": "11-10-2016",
      "amount": -20
    },
    {
      "transaction": "Transaction 3",
      "date": "12-10-2016",
      "amount": -30
    }
  ];

  ngOnInit() {
  }

}

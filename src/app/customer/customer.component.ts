import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private service: CustomerService) { }

  ngOnInit() {
  }

  customerData={};
  transactions=[];

  onReportData(evt) {
    console.log('got the data here', evt);

    this.service.getTransactions(evt.customer,evt.month,evt.year)
    .subscribe(
        rec => { 
          this.transactions = rec.data.transactions; 
          this.customerData={id:rec.data.customerId, amount: rec.data.amount}
          console.log(this.customerData); 
        },
         err => {
             // Log errors if any
             console.log(err);
         });

    // this.reportData = evt;
  }

}

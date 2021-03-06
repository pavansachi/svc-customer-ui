import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private service: CustomerService) { 

    this.service.getCustomerList()
    .subscribe(
        rec => { 
          this.customerIds = rec.data; 
        },
         err => {
             // Log errors if any
             console.log(err);
         });

  }

  customerIds=[];

  ngOnInit() {
  }

  customerData={};
  transactions=[];

  onReportData(evt) {
    
    if (!!!evt.customer || !!!evt.month || !!!evt.year) {
      alert('Required arguments are missing');
      return;
    }

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

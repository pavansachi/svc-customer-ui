import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

  constructor(private http: Http) { }

  getCustomerList() {
        
       return this.http.get(
         '/transactions/config'
        )
       .map(res => res.json());
    
  }

  getTransactions(id, month, year) {
        
       return this.http.get(
         `/transactions/customer?id=${id}&mon=${month}&y=${year}`
        )
       .map(res => res.json());
    
  }

}

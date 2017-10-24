import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

  constructor(private http: Http) { }

  getTransactions(id, month, year) {
    
       console.log(this.http);
    
       return this.http.get(
         `/transactions/customer?id=${id}&mon=${month}&y=${year}`
        )
       .map(res => res.json());
    
  }

}

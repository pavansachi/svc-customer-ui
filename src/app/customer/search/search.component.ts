import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  @Input()
  customerIds=[];

  months = [ { name: 'Jan', value: 0},
  { name: 'Feb', value: 1},
  { name: 'Mar', value: 2},
  { name: 'Apr', value: 3},
  { name: 'May', value: 4},
  { name: 'Jun', value: 5},
  { name: 'Jul', value: 6},
  { name: 'Aug', value: 7},
  { name: 'Sep', value: 8},
  { name: 'Oct', value: 9},
  { name: 'Nov', value: 10},
  { name: 'Dec', value: 11}
];

  years = [ 2016, 2017, 2018, 2019];

  selectedYear='';
  selectedCustomer='';
  selectedMonth='';

  @Output()
  reportData = new EventEmitter();

  getReport() {
    
    console.log('get the report', this.selectedYear,
    this.selectedMonth, this.selectedCustomer);

    var data = {
      month: this.selectedMonth,
      year: this.selectedYear,
      customer: this.selectedCustomer
    }

    this.reportData.emit(data);
    console.log('data emitted');
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  // transactions = [{
  //   description: 'A',
  //   date: '10-10',
  //   amount: 10
  // }];

  @Input()
  transactions=[];

  ngOnInit() {
  }

}

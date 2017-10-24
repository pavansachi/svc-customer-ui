import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  // id = 1;
  // amount = 10;

  @Input()
  customerData='';

  constructor() { }

  ngOnInit() {
  }

}

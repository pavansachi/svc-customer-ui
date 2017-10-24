import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  id = 1;
  amount = 100;

  reportData='';

  onReportData(evt) {
    console.log('got the data here', evt);
    this.reportData = evt;
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomerService } from './customer/customer.service';
import { CustomerComponent } from './customer/customer.component';
import { InfoComponent } from './customer/info/info.component';
import { SearchComponent } from './customer/search/search.component';
import { ListComponent } from './customer/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CustomerComponent,
    InfoComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ CustomerService
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }

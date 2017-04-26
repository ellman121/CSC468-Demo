import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ElementComponent } from './element/element.component';
import { TableComponent } from './table/table.component';
import { MaterialModule } from '@angular/material';

import 'rxjs/add/operator/toPromise';
import { ElementDetailsComponent } from './element-details/element-details.component'

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    TableComponent,
    ElementDetailsComponent
  ],
  entryComponents: [
    ElementDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleNgModelComp } from './ngmodel';

@NgModule({
  declarations: [
    AppComponent,
    SimpleNgModelComp
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent, 
    SimpleNgModelComp
  ]
})
export class AppModule { }

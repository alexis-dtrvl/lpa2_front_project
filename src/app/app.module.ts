import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiModule } from './swagger/api.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BurgersComponent } from './burgers/burgers.component';


@NgModule({
  declarations: [
    AppComponent,
    BurgersComponent
  ],
  imports: [
    BrowserModule,
    ApiModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

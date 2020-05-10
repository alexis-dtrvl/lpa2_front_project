import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiModule } from './swagger/api.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BurgersComponent } from './burgers/burgers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BurgerDetailsComponent } from './burger-details/burger-details.component';
import { AppRoutingModule } from './app-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    BurgersComponent,
    BurgerDetailsComponent
  ],
  imports: [
    BrowserModule,
    ApiModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

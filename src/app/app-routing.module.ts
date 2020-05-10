import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerDetailsComponent } from './burger-details/burger-details.component';
import { BurgersComponent } from './burgers/burgers.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes =[
  {path: '', component: BurgersComponent},
  {path: 'burger/:id', component: BurgerDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

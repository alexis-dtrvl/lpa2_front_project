import { Component, OnInit } from '@angular/core';
import { BurgerDetail } from './../swagger/model/burgerDetail';
import { BurgersService } from './../swagger/api/burgers.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-burger-details',
  templateUrl: './burger-details.component.html',
  styleUrls: ['./burger-details.component.css']
})
export class BurgerDetailsComponent implements OnInit {

  burger:BurgerDetail;
  constructor(
    private burgerSerice: BurgersService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.burgerSerice.burgerDetail(id)
    .subscribe( (result) => this.burger = result);
  }
  goBack(): void{
    this.location.back();
  }

}

import { Component, OnInit } from '@angular/core';
import { Burger, BurgersService } from '../swagger';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {

  burger : Burger[];
  constructor(private burgersService :BurgersService) { }

  ngOnInit(): void {
    this.burgersService.listBurgers()
    .subscribe( (result) => this.burger = result);
  }

}

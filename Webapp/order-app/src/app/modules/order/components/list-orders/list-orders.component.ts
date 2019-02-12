import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../shared/order.service';
import { Drink } from '../../shared/drink.model';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {
  drinks: Drink[];

  constructor(private orderServive: OrderService) { }

  ngOnInit() {
    this.orderServive.getDrinks().subscribe((res) => {
      this.drinks = res;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { Drink } from '../shared/drink.model';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.scss']
})
export class OrderOverviewComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}

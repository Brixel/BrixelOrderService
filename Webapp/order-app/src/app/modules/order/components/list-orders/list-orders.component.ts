import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../shared/order.service';
import { Order } from '../../shared/request.model';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {
  orders: Order[];
  notification = {
    title: '',
    body: ''
  };

  constructor(private orderServive: OrderService) { }

  ngOnInit() {
    this.orderServive.getOrders().subscribe((res) => {
      console.log(res);
      this.orders = res;
    });
  }

  clearDrinks() {
    this.orderServive.clearDrinks().subscribe((res) => {
      this.notification.title = 'Done';
      this.notification.body = 'Order was cleared!';
    }, err => {
      // TODO: error handling...
    });
  }

}

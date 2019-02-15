import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../shared/order.service';
import { Order } from '../../shared/order.model';
import { MatSnackBar } from '@angular/material';

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

  constructor(private orderServive: OrderService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.orderServive.getOrders().subscribe((res) => {
      console.log(res);
      this.orders = res;
    });
  }

  deleteOrder(id: string) {
    this.orderServive.deleteOrder(id).subscribe((res) => {
      this.snackBar.open(`Order ${id} deleted successfully!`, '', {
        duration: 3000
      });
    }, err => {
      this.snackBar.open(`Failed to delete order ${id}!`, '', {
        duration: 3000
      });
    });
  }

}

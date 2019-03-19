import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../shared/order.service';
import { Order, RequestedDrinkDTO } from '../../shared/order.model';
import { MatSnackBar, MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {
  requestedDrinks: RequestedDrinkDTO[] = [];
  notification = {
    title: '',
    body: ''
  };

  constructor(private orderService: OrderService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loadOrders();
  }

  private loadOrders() {
    this.orderService.getOrders().subscribe((res) => {
      this.requestedDrinks = res;
    });
  }

  markDrinkAsDone (drinkId: string){
    this.orderService.markDrinkAsCompleted(drinkId, true).subscribe(res => {
      this.snackBar.open(`Order marked as completed!`, '', {
        duration: 3000
      });
      this.loadOrders();
    })
  }

}

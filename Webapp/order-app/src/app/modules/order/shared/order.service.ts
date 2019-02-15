import { Injectable } from '@angular/core';
import { Drink, Containers } from './drink.model';
import { OrderProxy } from './order.proxy';
import { Observable } from 'rxjs';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private orderProxy: OrderProxy) { }

  getDrinks(): Observable<Drink[]> {
    return this.orderProxy.getDrinks();
  }

  makeOrder(selectedDrinks: Drink[]) {
    return this.orderProxy.makeOrder(selectedDrinks);
  }
  deleteOrder(id: string): Observable<any> {
    return this.orderProxy.deleteOrder(id);
  }
  getOrders(): Observable<Order[]> {
    return this.orderProxy.getOrders();
  }

}

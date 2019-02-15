import { Injectable } from '@angular/core';
import { Drink, Containers } from './drink.model';
import { OrderProxy } from './order.proxy';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  constructor(private orderProxy: OrderProxy) { }

  getDrinks(): Observable<Drink[]> {
    return this.orderProxy.getDrinks();
  }

  makeRequest(selectedDrinks: Drink[]) {
    return this.orderProxy.makeRequest(selectedDrinks);
  }
}

import { Injectable } from '@angular/core';
import { Drink, Containers } from './drink.model';
import { OrderProxy } from './order.proxy';
import { Observable } from 'rxjs';
import { Order, DrinkRequestCompletionDTO, RequestedDrinkDTO, AllDrinkRequestCompletedDTO } from './order.model';

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
  getOrders(): Observable<RequestedDrinkDTO[]> {
    return this.orderProxy.getOrders();
  }

  markDrinkAsCompleted(drinkId: string, isCompleted: boolean){
    const completionDto = <DrinkRequestCompletionDTO>{
      id: drinkId,
      isCompleted: isCompleted
    };
    return this.orderProxy.markDrinkAsCompleted(drinkId, completionDto);
  }

  markAllDrinksAsDone(): Observable<AllDrinkRequestCompletedDTO> {
    return this.orderProxy.markAllDrinksAsCompleted()
  }

}

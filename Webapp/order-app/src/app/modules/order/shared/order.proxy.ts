import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DrinkRequestCompletionDTO, RequestedDrinkDTO } from './order.model';
import { Drink } from './drink.model';
import { ApiService } from '../../core/api.service';


@Injectable()
export class OrderProxy {
  baseUri: string;
  
  constructor(private apiService: ApiService) { }

  getDrinks(): Observable<Drink[]> {
    return this.apiService
      .get(`/api/drinks`).pipe(map((res) => res));;
  }
  makeOrder(selectedDrinks: Drink[]) {
    return this.apiService
      .post(`/api/orders`, selectedDrinks);
  }
  getOrders(): Observable<RequestedDrinkDTO[]> {
    return this.apiService
      .get(`/api/orders`).pipe(map((res) => res));;
  }

  markDrinkAsCompleted(drinkId:string, completionDto: DrinkRequestCompletionDTO) {
    return this.apiService
      .post(`/api/orders/${drinkId}/completed`, completionDto)
  }
}

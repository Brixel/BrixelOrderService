import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order, DrinkRequestCompletionDTO, RequestedDrinkDTO } from './order.model';
import { Drink } from './drink.model';

const rootUri = `/drinks`;
@Injectable()
export class OrderProxy {
  
  constructor(private httpClient: HttpClient) {}
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  getDrinks(): Observable<Drink[]> {
    return this.httpClient
      .get<Drink[]>(`http://192.168.20.100:5000/api/drinks`)
      .pipe(catchError(this.handleError));
  }
  makeOrder(selectedDrinks: Drink[]) {
    return this.httpClient
      .post(`http://192.168.20.100:5000/api/orders`, selectedDrinks)
      .pipe(catchError(this.handleError));
  }
  getOrders(): Observable<RequestedDrinkDTO[]> {
    return this.httpClient
      .get<RequestedDrinkDTO[]>('http://192.168.20.100:5000/api/orders')
      .pipe(catchError(this.handleError));
  }

  markDrinkAsCompleted(drinkId:string, completionDto: DrinkRequestCompletionDTO) {
    console.log(completionDto);
    return this.httpClient
      .post(`http://192.168.20.100:5000/api/orders/${drinkId}/completed`, completionDto)
      .pipe(catchError(this.handleError));
  }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Order } from "./request.model";
import { Drink } from "./drink.model";

const rootUri = `/drinks`;
@Injectable()
export class OrderProxy {
  constructor(private httpClient: HttpClient) {}
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }

  getDrinks(): Observable<Drink[]> {
    return this.httpClient
      .get<Drink[]>(`http://localhost:52289/api/drinks`)
      .pipe(catchError(this.handleError));
  }
  clearDrinks(): Observable<any> {
    return this.httpClient
      .get<any>(`http://localhost:52289/api/drinks`)
      .pipe(catchError(this.handleError));
  }
  makeOrder(selectedDrinks: Drink[]) {
    return this.httpClient
      .post(`http://localhost:52289/api/orders`, selectedDrinks)
      .pipe(catchError(this.handleError));
  }
  getOrders(): Observable<Order[]> {
    return this.httpClient
      .get<Order[]>("http://localhost:52289/api/orders")
      .pipe(catchError(this.handleError));
  }
}

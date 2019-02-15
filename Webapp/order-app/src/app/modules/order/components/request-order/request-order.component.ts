import { Component, OnInit, Input } from '@angular/core';

import { OrderService } from '../../shared/order.service';
import { Drink } from '../../shared/drink.model';
import { DrinkRequestFormGroup } from '../../shared/drinkrequest.formgroup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-order',
  templateUrl: './request-order.component.html',
  styleUrls: ['./request-order.component.scss']
})
export class RequestOrderComponent implements OnInit {
  drinks: Drink[] = [];
  constructor(private orderService: OrderService, private router: Router) { }
  requestOrderFormGroup: DrinkRequestFormGroup;
  ngOnInit() {
    this.requestOrderFormGroup = new DrinkRequestFormGroup([]);
    this.orderService.getDrinks().subscribe((res) => {
      this.drinks = res;
      this.requestOrderFormGroup.updateDrinks(res);
    });
  }

  request() {
    const selectedDrinks = this.requestOrderFormGroup.getSelectedDrinks();
    this.orderService.makeRequest(selectedDrinks).subscribe();
    
  }

  back(){
    this.router.navigate(['../']);
  }
}


import { Component, OnInit, Input } from '@angular/core';

import { OrderService } from '../../shared/order.service';
import { Drink } from '../../shared/drink.model';
import { DrinkRequestFormGroup } from '../../shared/drinkrequest.formgroup';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-request-order',
  templateUrl: './request-order.component.html',
  styleUrls: ['./request-order.component.scss']
})
export class RequestOrderComponent implements OnInit {
  drinks: Drink[] = [];
  constructor(private orderService: OrderService, private router: Router, private matSnackBar: MatSnackBar) { }
  requestOrderFormGroup: DrinkRequestFormGroup;
  ngOnInit() {
    this.requestOrderFormGroup = new DrinkRequestFormGroup([]);
    this.orderService.getDrinks().subscribe((res) => {
      this.drinks = res;
      this.requestOrderFormGroup.updateDrinks(res);
    });
  }

  request() {
    if(this.requestOrderFormGroup.valid){
      const selectedDrinks = this.requestOrderFormGroup.getSelectedDrinks();
      this.orderService.makeOrder(selectedDrinks).subscribe((res) => {
        this.matSnackBar.open(`An order for ${selectedDrinks.map(sd => sd.name).join(', ')} has been placed`, null, {
          verticalPosition: 'top',
          duration: 2000
        });
        this.requestOrderFormGroup.reset();
      });
    }
    }

  back(){
    this.router.navigate(['../']);
  }
}


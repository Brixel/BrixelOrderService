import { Component, OnInit, Input, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import { OrderService } from '../../shared/order.service';
import { Drink } from '../../shared/drink.model';
import { DrinkRequestFormGroup } from '../../shared/drinkrequest.formgroup';
import { Router } from '@angular/router';
import { MatSnackBar, MatSelectionList, MatButtonToggleGroup, MatButtonToggle } from '@angular/material';

@Component({
  selector: 'app-request-order',
  templateUrl: './request-order.component.html',
  styleUrls: ['./request-order.component.scss']
})
export class RequestOrderComponent implements OnInit, AfterViewInit {
  
  @ViewChild(MatButtonToggleGroup) group: MatButtonToggleGroup;
  @ViewChildren(MatButtonToggle) toggles: QueryList<MatButtonToggle>;
  amountOfCols = 3;
  drinks: Drink[] = [];
  constructor(private orderService: OrderService, private router: Router, private matSnackBar: MatSnackBar) { }
  requestOrderFormGroup: DrinkRequestFormGroup;

  ngOnInit() {
    this.amountOfCols = this.calculateColumns(window.innerWidth);
    this.requestOrderFormGroup = new DrinkRequestFormGroup([]);
    this.orderService.getDrinks().subscribe((res) => {
      this.drinks = res;
      this.requestOrderFormGroup.updateDrinks(res);
    });
  }
  private calculateColumns(width: number): number {
    return (width <= 600) ? 1 : 4;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.toggles.forEach(toggle => toggle.buttonToggleGroup = this.group);
    });
  }
  onResize(event) {
    this.amountOfCols =this.calculateColumns(event.target.innerWidth);
  }
  request() {
    const selectedDrinks = this.toggles.filter(t => t.checked).map(t => t.value);
    if(selectedDrinks.length !== 0 ){
      this.orderService.makeOrder(selectedDrinks).subscribe((res) => {
        this.matSnackBar.open(`An order for ${selectedDrinks.map(sd => sd.name).join(', ')} has been placed`, null, {
          verticalPosition: 'top',
          duration: 2000
        });
        this.toggles.forEach(x => x.checked = false);
      });
    }
    }

  back(){
    this.router.navigate(['../']);
  }
}


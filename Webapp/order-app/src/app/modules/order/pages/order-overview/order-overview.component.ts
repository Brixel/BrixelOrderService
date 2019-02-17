import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.scss']
})
export class OrderOverviewComponent implements OnInit {
  amountOfCols: number;


  constructor() { }

  ngOnInit() {
    this.amountOfCols = this.calculateColumns(window.innerWidth);
  }
  
  private calculateColumns(width: number): number {
    return (width <= 400) ? 1 : 4;
  }

  onResize(event) {
    this.amountOfCols = this.calculateColumns(event.target.innerWidth);
  }
}

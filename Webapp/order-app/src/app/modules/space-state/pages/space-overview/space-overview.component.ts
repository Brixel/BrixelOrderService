import { Component, OnInit } from '@angular/core';
import { SpaceAPILog } from '../../shared/spaceapi.model';
import { SpaceApiProxy } from '../../shared/spaceapi.proxy';

@Component({
  selector: 'app-space-overview',
  templateUrl: './space-overview.component.html',
  styleUrls: ['./space-overview.component.scss']
})
export class SpaceOverviewComponent implements OnInit {
  amountOfCols: number;
  spaceState: SpaceAPILog; 
  
  constructor(private spaceApiProxy: SpaceApiProxy){};

  ngOnInit() {
    this.amountOfCols = this.calculateColumns(window.innerWidth);
    console.log('load');
    this.spaceApiProxy.getCurrentState().subscribe((res) => {
      this.spaceState = res;
    })
  }
  private calculateColumns(width: number): number {
    return (width <= 600) ? 1 : 4;
  }

  onResize(event) {
    this.amountOfCols = this.calculateColumns(event.target.innerWidth);
  }
}

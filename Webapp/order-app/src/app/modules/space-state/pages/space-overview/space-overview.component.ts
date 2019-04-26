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
    this.spaceApiProxy.getCurrentState().subscribe((res) => {
      this.spaceState = res;
    })
  }
  private calculateColumns(width: number): number {
    return (width <= 600) ? 1 : 4;
  }

  onRequestNewState(){
    if(!this.spaceState.open){

      this.spaceApiProxy.requestOpenState().subscribe((res) => {
        console.log(res)
        this.spaceState = res;
      })
    }else{
      
      this.spaceApiProxy.requestCloseState().subscribe((res) => {
        this.spaceState = res;
      })
    }
  }

  onResize(event) {
    this.amountOfCols = this.calculateColumns(event.target.innerWidth);
  }
}

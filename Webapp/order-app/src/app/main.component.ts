import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpaceAPIFeatureGuard } from './modules/core/feature.guard';
import { FeatureService } from './modules/core/feature.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private featureService: FeatureService) { }

  ngOnInit() {
  }

  navigatoToOrders(){
    this.router.navigate(['/orders']);
  }

  canRequestSpaceAPI(){
    return this.featureService.hasFeature('spaceAPI');
  }
}

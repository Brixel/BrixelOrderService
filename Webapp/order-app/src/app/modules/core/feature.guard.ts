import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientConfigurationService } from './clientconfiguration.service';
import { FeatureService } from './feature.service';

@Injectable({
  providedIn: 'root'
})
export class SpaceAPIFeatureGuard implements CanActivate {
  requiredFeature = 'spaceAPI';

  constructor(private featureService: FeatureService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.featureService.hasFeature(this.requiredFeature);    
  }
}

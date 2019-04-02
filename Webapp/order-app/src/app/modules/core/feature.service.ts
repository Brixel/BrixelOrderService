import { Injectable } from '@angular/core';
import { ClientConfigurationService } from './clientconfiguration.service';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  private enabledFeatures: string[] = [];

  constructor(private clientConfigurationSerice: ClientConfigurationService){
    this.enabledFeatures = this.clientConfigurationSerice.getClientConfiguration().features;
  }

  hasFeature(feature: string){
    return this.enabledFeatures.includes(feature);
  }
}

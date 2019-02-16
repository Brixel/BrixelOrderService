import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientConfigurationService } from './clientconfiguration.service';
import { ApiService } from './api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[ClientConfigurationService, ApiService]
})
export class CoreModule {
  constructor(
      @Optional()
      @SkipSelf()
      parentModule: CoreModule
  ) {
      if (parentModule) {
          throw new Error('CoreModule is already loaded. Import it in the AppModule only');
      }
  }
}


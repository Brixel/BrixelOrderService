import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceOverviewComponent } from './pages/space-overview/space-overview.component';
import { SpaceApiProxy } from './shared/spaceapi.proxy';
import { MatGridListModule, MatCardModule, MatButtonModule } from '@angular/material';
import { ClientConfigurationService } from '../core/clientconfiguration.service';
import { RouterModule } from '@angular/router';
import { SpaceStateRoutingModule } from './space-state-routing.module';

@NgModule({
  declarations: [SpaceOverviewComponent],
  imports: [
    SpaceStateRoutingModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  providers:[
    ClientConfigurationService, SpaceApiProxy
  ]
})
export class SpaceStateModule {
  
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { SpaceAPIFeatureGuard } from './modules/core/feature.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'orders',
    pathMatch: 'full'
  },
  {
    path: 'orders',
    component: MainComponent,
    loadChildren: './modules/order/order.module#OrderModule'
  },
  {
    path:'space',
    component: MainComponent,
    canActivate: [SpaceAPIFeatureGuard],
    loadChildren: './modules/space-state/space-state.module#SpaceStateModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

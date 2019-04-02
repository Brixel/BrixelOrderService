import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceOverviewComponent } from './pages/space-overview/space-overview.component';

const routes: Routes = [
  {path: '',
component: SpaceOverviewComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class SpaceStateRoutingModule { }

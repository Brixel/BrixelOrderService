import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrdersComponent } from './components/list-orders/list-orders.component';
import { RequestOrderComponent } from './components/request-order/request-order.component';
import { OrderOverviewComponent } from './order-overview/order-overview.component';

const routes: Routes = [
  {path: '',
component: OrderOverviewComponent},
{
  path: 'list',
  component: ListOrdersComponent
},
{
  path: 'request',
  component: RequestOrderComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class OrderRoutingModule { }

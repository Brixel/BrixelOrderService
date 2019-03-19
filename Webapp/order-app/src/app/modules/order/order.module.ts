import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderOverviewComponent } from './pages/order-overview/order-overview.component';
import { RequestOrderComponent } from './components/request-order/request-order.component';
import { ListOrdersComponent } from './components/list-orders/list-orders.component';
import { MatListModule, MatGridListModule, MatCardModule, MatButtonModule, 
  MatSelectModule, MatOptionModule, MatFormFieldModule, MatCheckboxModule, MatButtonToggleModule, MatToolbarModule} from '@angular/material';
import { OrderRoutingModule } from './order-routing.module';
import { RouterModule } from '@angular/router';
import { ContainerToTextPipePipe } from './shared/container-to-text-pipe.pipe';
import { OrderProxy } from './shared/order.proxy';
import { OrderService } from './shared/order.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientConfigurationService } from '../core/clientconfiguration.service';



@NgModule({
  declarations: [OrderOverviewComponent, RequestOrderComponent, ListOrdersComponent, ContainerToTextPipePipe],
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    OrderRoutingModule,
    MatCheckboxModule,
    MatGridListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
    CommonModule
  ],
  providers: [ContainerToTextPipePipe,
    ClientConfigurationService, OrderProxy, OrderService]

})
export class OrderModule { }

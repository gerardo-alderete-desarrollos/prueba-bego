import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { ComponentsModule } from '../../core/components/components.module';
import { CardOrderComponent } from './components/card-order/card-order.component';


@NgModule({
  declarations: [
    OrdersComponent,
    CardOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ComponentsModule,
  ]
})
export class OrdersModule { }

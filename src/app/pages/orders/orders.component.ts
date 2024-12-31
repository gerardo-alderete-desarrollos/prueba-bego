import { Component } from '@angular/core';
import { ServiceOrdersService } from '../../core/services/service-orders.service';
import { OrdersRequest } from '../../core/interfaces/OrdersResult.model';
import { Order, OrdersUpcomingRequest } from '../../core/interfaces/OrdersUpcommingResult.model';

@Component({
  selector: 'app-orders',
  standalone: false,
  
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  options: Array<string> = ['Upcoming','Completed','Past'];
  ordersUpcoming!: OrdersUpcomingRequest;
  ordersTemp!: Order[];

  constructor(private _serviceOrders: ServiceOrdersService){
    this.getOrders();
  }

  handleSearhEmit(value: string){
    this.ordersUpcoming.result = this.ordersTemp.filter( order => order.order_number.toLowerCase().includes(value.toLowerCase()))
    
  }

  getOrders(){
    this._serviceOrders.getOrdersUpcomming().subscribe({
      next: (data) =>{
        this.ordersUpcoming = data;
        this.ordersTemp = data.result;
      },error: () => console.log()
    })
  }
}

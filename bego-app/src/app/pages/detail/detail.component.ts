import { Component } from '@angular/core';
import { ServiceOrdersService } from '../../core/services/service-orders.service';
import { OrdersRequest, StatusList } from '../../core/interfaces/OrdersResult.model';

@Component({
  selector: 'app-detail',
  standalone: false,
  
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
    orderRequest!: OrdersRequest;
    dataCollapse!:Object;
    statusList!: Array<any>;

    constructor(private _service: ServiceOrdersService) {
      this.getOrder();
    }

    getOrder(){
      this._service.getOrders().subscribe({
        next: (data) => {
          this.orderRequest = data
        }
      })
    }

    handleSwitch(value:string | any){
      this.dataCollapse = value;

      if(value.title.includes('Pickup')){
        this.statusList = this.orderRequest.result.status_list.pickup;
      } else {
        this.statusList = this.orderRequest.result.status_list.dropoff;
      }
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { OrdersRequest } from '../../../../core/interfaces/OrdersResult.model';
import { Order, OrdersUpcomingRequest } from '../../../../core/interfaces/OrdersUpcommingResult.model';

@Component({
  selector: 'app-card-order',
  standalone: false,
  
  templateUrl: './card-order.component.html',
  styleUrl: './card-order.component.scss'
})
export class CardOrderComponent implements OnInit{
  @Input() order!: Order;
  statePickup: string = '';
  directionPickup: string = '';
  stateDropoff: string = '';
  directionDropoff: string = '';

  startDate!: Date;
  startDatePickup!: Date;
  startDateDropoff!: Date;
  endDatePickup!: Date;
  endDateDropoff!: Date;
  constructor(){
  }
  ngOnInit(): void {


    this.statePickup = this.order.destinations[0].address.split(',')[this.order.destinations[0].address.split(',').length -1]
    this.directionPickup = this.order.destinations[0].address
    this.stateDropoff = this.order.destinations[1].address.split(',')[this.order.destinations[1].address.split(',').length -1]
    this.directionDropoff = this.order.destinations[1].address

    this.startDate = new Date(this.order.start_date);
    this.startDatePickup = new Date(this.order.destinations[0].start_date);
    this.endDatePickup = new Date(this.order.destinations[0].start_date);
    this.startDateDropoff = new Date(this.order.destinations[1].start_date);
    this.endDateDropoff = new Date(this.order.destinations[1].start_date);
  }
}

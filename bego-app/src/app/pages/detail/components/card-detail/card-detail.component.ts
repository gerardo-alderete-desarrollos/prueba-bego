import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Destination } from '../../../../core/interfaces/OrdersResult.model';

@Component({
  selector: 'app-card-detail',
  standalone: false,
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.scss'
})
export class CardDetailComponent implements OnInit{
  @Input() destinations!: Destination[];
  @Input() reference_number!: string;
  @Input() order_number!: string;
  @Output() emiter: EventEmitter<any> = new EventEmitter();

    statePickup: string = '';
    directionPickup: string = '';
    stateDropoff: string = '';
    directionDropoff: string = '';
  constructor(){
  }

  ngOnInit(): void {
    this.statePickup = this.destinations[0].address.split(',')[this.destinations[0].address.split(',').length -1]
    this.directionPickup = this.destinations[0].address;
    this.stateDropoff = this.destinations[1].address.split(',')[this.destinations[1].address.split(',').length -1]
    this.directionDropoff = this.destinations[1].address;
  }

  emitHandle(value:string){
    let destination: Destination = value.includes('pickup') ? this.destinations[0] : this.destinations[1];

    let objTemp = {
      title: value.includes('pickup') ? 'Pickup Data' : 'Dropoff Data',
      destination
    };

    this.emiter.emit(objTemp);
  }
}

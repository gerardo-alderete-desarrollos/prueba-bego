import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() eventKeyUp: EventEmitter<string> = new EventEmitter()

  keyupHandle(event:KeyboardEvent  | any){
    this.eventKeyUp.emit(event.target.value)
  }
}

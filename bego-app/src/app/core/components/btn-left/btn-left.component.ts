import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import moment from 'moment';
import { of, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-btn-left',
  standalone: false,
  
  templateUrl: './btn-left.component.html',
  styleUrl: './btn-left.component.scss',
})
export class BtnLeftComponent implements OnInit{
  @Input() startDate!: Date;
  currentDate: Date = new Date();
  time!: number ;
  disabled = true;
  constructor(){
  }
  
  ngOnInit(): void {
    const actual = moment().hours();
    const start = moment(this.startDate).hours();
    this.time = start - actual  ;

    let interval = setInterval(() => {
      this.time = this.time -1;
      this.disabled=true;
        if(this.time == 0){
          clearInterval(interval);
          this.disabled=false;
        }
      
    }, 1000);
   
  }
}

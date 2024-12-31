import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-process',
  standalone: false,
  
  templateUrl: './card-process.component.html',
  styleUrl: './card-process.component.scss'
})
export class CardProcessComponent implements OnInit{
  @Input() statusList!: Array<any>;
  @Input() startDate!: number;
  @Input() thumbnail!: any;
  date!: Date;

  ngOnInit(): void {
    this.date = new Date(this.startDate);
  }


}

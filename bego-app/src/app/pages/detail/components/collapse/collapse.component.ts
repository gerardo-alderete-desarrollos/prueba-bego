import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  standalone: false, 
  
  templateUrl: './collapse.component.html',
  styleUrl: './collapse.component.scss'
})
export class CollapseComponent implements OnInit{
  startDate!: Date;
  @Input() dataCollapse:any;
  showInfo = false;

  ngOnInit(): void {
    this.startDate = new Date(this.dataCollapse.destination.startDate);
  }

}

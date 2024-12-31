import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: false,
  
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  @Input() options!: Array<string>;
}
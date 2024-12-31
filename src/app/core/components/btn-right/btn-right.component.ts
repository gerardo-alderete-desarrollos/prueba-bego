import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-right',
  standalone: false,
  
  templateUrl: './btn-right.component.html',
  styleUrl: './btn-right.component.scss'
})
export class BtnRightComponent {
  constructor(private _router:Router){

  }
  
  goTo(){
    this._router.navigateByUrl('detail');
  }
}

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailComponent } from './detail.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { CardProcessComponent } from './components/card-process/card-process.component';
import { DetailRoutingModule } from './detail-routing.module';
import { ComponentsModule } from '../../core/components/components.module';
import { CollapseComponent } from './components/collapse/collapse.component';


@NgModule({
  declarations: [
    DetailComponent,
    CardDetailComponent,
    CardProcessComponent,
    CollapseComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    ComponentsModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class DetailModule { }

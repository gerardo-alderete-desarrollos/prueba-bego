import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { BtnLeftComponent } from './btn-left/btn-left.component';
import { BtnRightComponent } from './btn-right/btn-right.component';
import { BtnCompleteComponent } from './btn-complete/btn-complete.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TabsComponent,
    BtnLeftComponent,
    BtnRightComponent,
    BtnCompleteComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    TabsComponent,
    BtnLeftComponent,
    BtnRightComponent,
    BtnCompleteComponent,
    SearchComponent,
  ]
})
export class ComponentsModule { }

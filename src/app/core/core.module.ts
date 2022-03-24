import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '@ap/shared/shared.module';

import {
  HeaderComponent,
  FooterComponent,
  SideNavMapComponent
} from './components';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavMapComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavMapComponent
  ]
})
export class CoreModule { }

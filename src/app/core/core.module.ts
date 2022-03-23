import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '@ap/shared/shared.module';

import {
  HeaderComponent,
  FooterComponent
} from './components';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }

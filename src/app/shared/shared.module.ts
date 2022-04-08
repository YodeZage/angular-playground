import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  NavCardComponent
} from './components';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    NavCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatCardModule,
  ],
  exports: [
    RouterModule,
    NavCardComponent,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatCardModule,
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ]
})
export class SharedModule { }

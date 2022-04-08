import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationsRoutingModule } from './animations-routing.module';
import { AnimationsComponent } from './animations.component';


@NgModule({
  declarations: [
    AnimationsComponent
  ],
  imports: [
    CommonModule,
    AnimationsRoutingModule
  ]
})
export class AnimationsModule { }

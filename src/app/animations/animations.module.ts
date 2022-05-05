import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationsRoutingModule } from './animations-routing.module';
import { AnimationsComponent } from './animations.component';
import { BasicAnimationComponent } from './components/basic-animation/basic-animation.component';


@NgModule({
  declarations: [
    AnimationsComponent,
    BasicAnimationComponent
  ],
  imports: [
    CommonModule,
    AnimationsRoutingModule
  ]
})
export class AnimationsModule { }

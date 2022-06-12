import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationsRoutingModule } from './animations-routing.module';
import { AnimationsComponent } from './animations.component';
import { BasicAnimationComponent } from './components/basic-animation/basic-animation.component';
import { TransitionTriggerComponent } from './components/transition-trigger/transition-trigger.component';
import { ComplexSequencesComponent } from './components/complex-sequences/complex-sequences.component';
import { SharedModule } from '@ap/shared/shared.module';


@NgModule({
  declarations: [
    AnimationsComponent,
    BasicAnimationComponent,
    TransitionTriggerComponent,
    ComplexSequencesComponent
  ],
  imports: [
    CommonModule,
    AnimationsRoutingModule,
    SharedModule
  ]
})
export class AnimationsModule { }

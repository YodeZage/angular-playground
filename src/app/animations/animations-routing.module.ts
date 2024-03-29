import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimationsComponent} from "./animations.component";
import { BasicAnimationComponent } from './components/basic-animation/basic-animation.component';
import { TransitionTriggerComponent } from './components/transition-trigger/transition-trigger.component';
import { ComplexSequencesComponent } from './components/complex-sequences/complex-sequences.component';
import { ReusableAnimationComponent } from './components/reusable-animation/reusable-animation.component';

const routes: Routes = [
  { path: '',
    component: AnimationsComponent,
    children: [
      { path: 'basic', component: BasicAnimationComponent },
      { path: 'transition-trigger', component: TransitionTriggerComponent },
      { path: 'complex-sequences', component: ComplexSequencesComponent },
      { path: 'reusable-animation', component: ReusableAnimationComponent },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule { }

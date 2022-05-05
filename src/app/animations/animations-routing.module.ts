import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimationsComponent} from "./animations.component";
import { BasicAnimationComponent } from './components/basic-animation/basic-animation.component';

const routes: Routes = [
  { path: '',
    component: AnimationsComponent,
    children: [
      { path: 'basic', component: BasicAnimationComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from "@angular/animations";

import {reusableSnippetAnimation, reusableTransitionAnimation} from "./reusable-animation.animation";

@Component({
  selector: 'ap-reusable-animation',
  templateUrl: './reusable-animation.component.html',
  styleUrls: ['./reusable-animation.component.scss'],
  animations: [
    trigger('openClose', [
      transition('open => closed', [
        useAnimation(reusableTransitionAnimation, {
          params: {
            opacity: 1,
            backgroundColor: 'cornflowerblue',
            time: '1s'
          }
        })
      ]),
      transition('closed => open', [
        useAnimation(reusableTransitionAnimation, {
          params: {
            opacity: 0.8,
            backgroundColor: 'cadetblue',
            time: '0.5s'
          }
        })
      ])
    ]),
    reusableSnippetAnimation
  ]
})
export class ReusableAnimationComponent implements OnInit {

  isOpen = true;
  openCloseReady = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  openCloseReadyToggle() {
    this.openCloseReady = !this.openCloseReady;
  }

}

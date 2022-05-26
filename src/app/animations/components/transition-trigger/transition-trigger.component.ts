import { Component, OnInit } from '@angular/core';
import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'ap-transition-trigger',
  templateUrl: './transition-trigger.component.html',
  styleUrls: ['./transition-trigger.component.scss'],
  animations: [
    // Multiple Transition
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'cornflowerblue'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'cadetblue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      // this state transition are replaced by above transition
      transition('* => closed', [
        style({ opacity: 0 }),
        animate('5s', style({ opacity: 1 })),
      ]),
    ]),


    //Entering and Leaving
    //this example doesn't need to use state()
    trigger('myInsertRemoveTrigger', [
      // ':enter' is alias for void => *
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s', style({ opacity: 1 })),
      ]),
      // ':leave' is alias for * => void
      transition(':leave', [
        animate('1s', style({ opacity: 0 }))
      ])
    ]),


    //Number Value
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: 0 }),
          stagger(50, [
            animate('1s ease-out', style({ opacity: 1, width: '*' })),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('1s ease-out', style({ opacity: 0, width: 0 })),
          ]),
        ])
      ]),
    ]),

  ]
})
export class TransitionTriggerComponent implements OnInit {

  isOpen: boolean = true;
  isShown: boolean = true;
  exampleNumber: number = -1;
  testData: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  insertRemoveToggle(): void {
    this.isShown = !this.isShown;
  }

  increaseDecreaseToggle(action: string): void {
    if (action === 'I') {
      this.exampleNumber++;
      this.testData.push({name: this.exampleNumber});
    } else if (action === 'D' && this.exampleNumber >= 0) {
      this.exampleNumber--;
      this.testData.pop();
    }


    // if (this.exampleNumber !== this.testData.length) {
    //   this.exampleNumber = this.testData.length;
    //   this.testData.push({name: 123});
    // } else {
    //   this.exampleNumber = -1;
    //   this.testData.pop();
    // }

    console.log(this.testData);
  }



}

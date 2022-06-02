import {Component, HostBinding, OnInit} from '@angular/core';
import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
  AnimationEvent,
  keyframes
} from "@angular/animations";

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


    //Boolean Value
    trigger('trueFalse', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '100px' })),
      transition('false <=> true', animate(500))
    ]),


    //Parent Child
    trigger('runningAnimation', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '100px' })),
      transition('false <=> true', animate(500))
    ]),


    //Animation Callback
    trigger('callBack', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '100px' })),
      transition('false <=> true', animate(2000))
    ]),


    //Keyframes
    trigger('keyframes', [
      transition('start => end', [
        animate('2s', keyframes([
          style({ backgroundColor: 'blue' }),
          style({ backgroundColor: 'red' }),
          style({ backgroundColor: 'orange' })
        ]))
      ]),
      transition('end => start', [
        animate('3s', keyframes([
          style({ backgroundColor: 'orange' }),
          style({ backgroundColor: 'red' }),
          style({ backgroundColor: 'blue' })
        ]))
      ])
    ]),


    //Offset
    trigger('offset', [
      transition('inactive => active', [
        animate('2s', keyframes([
          style({ height: '*', offset: 0}),
          style({ height: '100px', offset: 0.9}),
          style({ height: '200px', offset: 1.0})
        ])),
      ]),
      transition('active => inactive', [
        animate('3s', keyframes([
          style({ height: '200px', offset: 0}),
          style({ height: '100px', offset: 0.1}),
          style({ height: '*', offset: 1.0})
        ]))
      ])
    ]),


    //Pulsation
    trigger('pulsation', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('close', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open <=> close', [
        animate('2s', keyframes ( [
          style({ opacity: 0.1, offset: 0.1 }),
          style({ opacity: 0.6, offset: 0.2 }),
          style({ opacity: 1,   offset: 0.5 }),
          style({ opacity: 0.2, offset: 0.7 })
        ]))
      ])
    ]),



  ]
})
export class TransitionTriggerComponent implements OnInit {
  // Below 2 line can disable all animation for the entire component
  @HostBinding('@.disabled')
  public animationsDisabled = false;

  isOpen: boolean = true;
  isShown: boolean = true;
  exampleNumber: number = 0;
  testData: any[] = [];
  isTrue: boolean = true;
  isDisabled: boolean = true;
  isRunning: boolean = true;
  isCallback: boolean = true;
  isKeyframes: boolean = true;
  isOffset: boolean = true;
  isPulsation: boolean = true;

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
  }

  toggleTrueFalse(): void {
    this.isTrue = !this.isTrue;
  }

  toggleDisable(): void {
    this.isDisabled = !this.isDisabled;
  }

  toggleIsRunning(): void {
    this.isRunning = !this.isRunning;
  }

  toggleCallback(): void {
    this.isCallback = !this.isCallback;
  }

  onAnimationEvent(event: AnimationEvent) {
    // openClose is trigger name in this example
    console.warn(`Animation Trigger: ${event.triggerName}`);
    // phaseName is "start" or "done"
    console.warn(`Phase: ${event.phaseName}`);
    // in our example, totalTime is 1000 (number of milliseconds in a second)
    console.warn(`Total time: ${event.totalTime}`);
    // in our example, fromState is either "open" or "closed"
    console.warn(`From: ${event.fromState}`);
    // in our example, toState either "open" or "closed"
    console.warn(`To: ${event.toState}`);
    // the HTML element itself, the button in this case
    console.warn(`Element: ${event.element}`);
  }

  toggleKeyframes(): void {
    this.isKeyframes = !this.isKeyframes;
  }

  toggleOffset(): void {
    this.isOffset = !this.isOffset;
  }

  togglePulsation(): void {
    this.isPulsation = !this.isPulsation;
  }

}

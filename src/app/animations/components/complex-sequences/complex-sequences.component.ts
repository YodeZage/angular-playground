import { Component, OnInit } from '@angular/core';
import {animate, group, query, sequence, stagger, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'ap-complex-sequences',
  templateUrl: './complex-sequences.component.html',
  styleUrls: ['./complex-sequences.component.scss'],
  animations: [
    // Query Function
    trigger('queryAnimation', [
      transition('show => hide', [
        // hide the inner elements
        query('h5', style({ opacity: 0 })),
        query('.query-content', style({ opacity: 0 })),

        // animate the inner elements in, one by one
        query('h5', animate(1000, style({ opacity: 1 }))),
        query('.query-content', animate(1000, style({ opacity: 1 }))),
      ]),
      transition('hide => show', [
        query('h5', style({ opacity: 1 })),
        query('.query-content', style({ opacity: 1 })),

        query('h5', animate(1000, style({ opacity: 0 }))),
        query('.query-content', animate(1000, style({ opacity: 0 }))),
      ])
    ]),

    // Stagger Function
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(3000, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], {optional: true}),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(1000, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], {optional: true})
      ])
    ]),

    // Group Function
    trigger('groupInOut', [
      state('in', style({
        width: '*',
        transform: 'translateX(0)', opacity: 1
      })),
      transition(':enter', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: '*'
          })),
          animate('3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition(':leave', [
        group([
          animate('4s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('4s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ]),

    // Sequential Function
    trigger('sequentialInOut', [
      state('in', style({
        width: '*',
        transform: 'translateX(0)', opacity: 1
      })),
      transition(':enter', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        sequence([
          animate('1s ease', style({
            opacity: 1
          })),
          animate('3s 0.5s ease', style({
            transform: 'translateX(0)',
            width: '*'
          }))
        ])
      ]),
      transition(':leave', [
        sequence([
          animate('4s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('4s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ]),

    // Filter Example
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: 0 }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, width: '*' })),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 0, width: 0 })),
          ]),
        ])
      ]),
    ])

  ]
})
export class ComplexSequencesComponent implements OnInit {

  queryFlag: string = 'show';
  staggerItems: number[] = [];
  groupString: string = 'I am entering';
  sequenceString: string = 'I am entering';
  heroesTotal: number = -1;
  private _heroes: Hero[] = [];
  private HEROES: Hero[] = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  constructor() { }

  ngOnInit(): void {
    this._heroes = this.HEROES;
  }

  toggleQuery(): void {
    if (this.queryFlag === 'show') {
      this.queryFlag = 'hide';
    } else {
      this.queryFlag = 'show';
    }
  }

  showStaggerItems() {
    this.staggerItems = [0,1,2,3,4];
  }

  hideStaggerItems() {
    this.staggerItems = [];
  }

  toggleStagger(): void {
    this.staggerItems.length ? this.hideStaggerItems() : this.showStaggerItems();
  }

  toggleGroup(): void {
    if (this.groupString === 'I am entering') {
      this.groupString = 'I am leaving';
    } else {
      this.groupString = 'I am entering';
    }
  }

  toggleSequence(): void {
    if (this.sequenceString === 'I am entering') {
      this.sequenceString = 'I am leaving';
    } else {
      this.sequenceString = 'I am entering';
    }
  }

  updateCriteria(criteria: string) {
    criteria = criteria ? criteria.trim() : '';

    this._heroes = this.HEROES.filter(hero => hero.name.toLowerCase().includes(criteria.toLowerCase()));
    const newTotal = this.heroes.length;

    if (this.heroesTotal !== newTotal) {
      this.heroesTotal = newTotal;
    } else if (!criteria) {
      this.heroesTotal = -1;
    }
  }

  get heroes() { return this._heroes; }

}


export interface Hero {
  id: number;
  name: string;
}

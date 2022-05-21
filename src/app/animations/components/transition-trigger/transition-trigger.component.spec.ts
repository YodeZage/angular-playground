import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionTriggerComponent } from './transition-trigger.component';

describe('TransitionTriggerComponent', () => {
  let component: TransitionTriggerComponent;
  let fixture: ComponentFixture<TransitionTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitionTriggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexSequencesComponent } from './complex-sequences.component';

describe('ComplexSequencesComponent', () => {
  let component: ComplexSequencesComponent;
  let fixture: ComponentFixture<ComplexSequencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexSequencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexSequencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

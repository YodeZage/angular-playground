import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavMapComponent } from './side-nav-map.component';

describe('SideNavMapComponent', () => {
  let component: SideNavMapComponent;
  let fixture: ComponentFixture<SideNavMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

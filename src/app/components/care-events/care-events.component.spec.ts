import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareEventsComponent } from './care-events.component';

describe('CareEventsComponent', () => {
  let component: CareEventsComponent;
  let fixture: ComponentFixture<CareEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

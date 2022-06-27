import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareAccordionComponent } from './care-accordion.component';

describe('CareAccordionComponent', () => {
  let component: CareAccordionComponent;
  let fixture: ComponentFixture<CareAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

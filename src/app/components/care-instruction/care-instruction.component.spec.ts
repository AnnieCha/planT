import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareInstructionComponent } from './care-instruction.component';

describe('CareInstructionComponent', () => {
  let component: CareInstructionComponent;
  let fixture: ComponentFixture<CareInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareInstructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

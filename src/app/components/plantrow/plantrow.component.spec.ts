import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantrowComponent } from './plantrow.component';

describe('PlantrowComponent', () => {
  let component: PlantrowComponent;
  let fixture: ComponentFixture<PlantrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantHeaderComponent } from './plant-header.component';

describe('PlantHeaderComponent', () => {
  let component: PlantHeaderComponent;
  let fixture: ComponentFixture<PlantHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

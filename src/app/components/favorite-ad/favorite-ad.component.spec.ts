import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteAdComponent } from './favorite-ad.component';

describe('FavoriteAdComponent', () => {
  let component: FavoriteAdComponent;
  let fixture: ComponentFixture<FavoriteAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

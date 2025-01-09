import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetaryCardComponent } from './planetary-card.component';

describe('PlanetaryCardComponent', () => {
  let component: PlanetaryCardComponent;
  let fixture: ComponentFixture<PlanetaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetaryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

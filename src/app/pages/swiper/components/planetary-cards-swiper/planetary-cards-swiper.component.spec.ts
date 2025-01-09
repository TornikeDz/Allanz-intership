import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetaryCardsSwiperComponent } from './planetary-cards-swiper.component';

describe('PlanetaryCardsSwiperComponent', () => {
  let component: PlanetaryCardsSwiperComponent;
  let fixture: ComponentFixture<PlanetaryCardsSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetaryCardsSwiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetaryCardsSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

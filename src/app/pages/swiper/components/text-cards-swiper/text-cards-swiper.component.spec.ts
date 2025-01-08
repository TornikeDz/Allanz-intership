import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCardsSwiperComponent } from './text-cards-swiper.component';

describe('TextCardsSwiperComponent', () => {
  let component: TextCardsSwiperComponent;
  let fixture: ComponentFixture<TextCardsSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextCardsSwiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextCardsSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

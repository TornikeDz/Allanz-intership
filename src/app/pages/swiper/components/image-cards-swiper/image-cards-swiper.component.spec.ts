import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardsSwiperComponent } from './image-cards-swiper.component';

describe('ImageCardsSwiperComponent', () => {
  let component: ImageCardsSwiperComponent;
  let fixture: ComponentFixture<ImageCardsSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageCardsSwiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageCardsSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

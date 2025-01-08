import { ChangeDetectionStrategy, Component, DestroyRef, OnInit } from '@angular/core';
import { MarsRoverImagesService } from '../../../../services/mars-rover-images/mars-rover-images.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { MarsRoverImage, MarsRoverPhotos } from '../../../../interfaces/mars-rover-image.interface';
import SwiperCore, { SwiperOptions, Navigation, Pagination } from 'swiper';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { textSliderConfig } from '../../constants/sliderConfigs';
import { ImageCardComponent } from './image-card/image-card.component';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-image-cards-swiper',
  standalone: true,
  imports: [CommonModule, SwiperModule, ImageCardComponent],
  templateUrl: './image-cards-swiper.component.html',
  styleUrl: './image-cards-swiper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageCardsSwiperComponent implements OnInit{
  public roverImages!: MarsRoverPhotos;
  public config: SwiperOptions  = textSliderConfig;

  constructor(
    private readonly marsRoverImagesService: MarsRoverImagesService,
    private readonly cdr: DestroyRef
  ) {}

  ngOnInit(): void {
    this.getRoverImages();
  }

  public getRoverImages() {
    this.marsRoverImagesService.getMarsRoverImages(2).pipe(
      takeUntilDestroyed(this.cdr),
      catchError(error => {
        console.error('Something went wrong with retrieving rover images', error);
        return of(null);
      }),
    )
    .subscribe((data) => {
      if(data) {
        this.roverImages = data;
      }
    })
  }
}

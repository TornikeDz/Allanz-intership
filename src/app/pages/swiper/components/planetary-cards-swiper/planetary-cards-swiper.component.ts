import { ChangeDetectionStrategy, Component } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Pagination } from 'swiper';
import { planetsSliderConfig } from '../../constants/sliderConfigs';
import { SwiperModule } from 'swiper/angular';
import { PlanetaryCardComponent } from './planetary-card/planetary-card.component';
import { PLANETARY_CARDS_DATA } from '../../constants/planetary-cards-data';
import { CommonModule } from '@angular/common';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-planetary-cards-swiper',
  standalone: true,
  imports: [SwiperModule, PlanetaryCardComponent, CommonModule],
  templateUrl: './planetary-cards-swiper.component.html',
  styleUrl: './planetary-cards-swiper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetaryCardsSwiperComponent {
  public config: SwiperOptions  = planetsSliderConfig;
  public planetaryCards = PLANETARY_CARDS_DATA;
}

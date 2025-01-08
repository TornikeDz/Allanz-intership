
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TextCardComponent } from './text-card/text-card.component';
import { textSliderConfig } from '../../constants/sliderConfigs';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { SwiperOptions, Navigation, Pagination } from 'swiper';
import { textCardData } from '../../constants/text-card-data';
import { TextCard } from '../../interfaces/text-card.interface';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-text-cards-swiper',
  standalone: true,
  imports: [CommonModule,TextCardComponent, SwiperModule,TranslateModule],
  templateUrl: './text-cards-swiper.component.html',
  styleUrl: './text-cards-swiper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextCardsSwiperComponent {
  public config: SwiperOptions  = textSliderConfig;
  public textCardData: TextCard[] = textCardData;
}

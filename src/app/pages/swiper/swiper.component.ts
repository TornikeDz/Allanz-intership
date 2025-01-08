import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TextCardsSwiperComponent } from './components/text-cards-swiper/text-cards-swiper.component';
import { PlanetaryCardsSwiperComponent } from './components/planetary-cards-swiper/planetary-cards-swiper.component';
import { ImageCardsSwiperComponent } from './components/image-cards-swiper/image-cards-swiper.component';
import { CommonModule } from '@angular/common';
import { CARD_TYPE } from './constants/card-types';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [TranslateModule, CommonModule, TextCardsSwiperComponent, ImageCardsSwiperComponent, PlanetaryCardsSwiperComponent],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperComponent {
  public cardType: string = CARD_TYPE.TEXT;

  public setCardType(type: string): void {
    this.cardType = type;
  }
}

import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperComponent {

}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-planetary-card',
  standalone: true,
  imports: [],
  templateUrl: './planetary-card.component.html',
  styleUrl: './planetary-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetaryCardComponent {

}

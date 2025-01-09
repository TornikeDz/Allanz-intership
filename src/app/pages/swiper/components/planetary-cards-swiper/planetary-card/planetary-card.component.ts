import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-planetary-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './planetary-card.component.html',
  styleUrl: './planetary-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetaryCardComponent {
  @Input() public planetName: string = "";
  @Input() public planetDescription: string = "";

  public getPlanetIcon() {
    return `../assets/icons/planets/${this.planetName}.svg`
  }
}

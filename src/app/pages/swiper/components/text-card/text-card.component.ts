import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-text-card',
  standalone: true,
  imports: [],
  templateUrl: './text-card.component.html',
  styleUrl: './text-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextCardComponent {

}

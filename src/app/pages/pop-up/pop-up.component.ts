import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopUpComponent {

}

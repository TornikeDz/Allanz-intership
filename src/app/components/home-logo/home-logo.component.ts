import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-logo',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './home-logo.component.html',
  styleUrl: './home-logo.component.scss'
})
export class HomeLogoComponent{
}

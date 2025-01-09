import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { NavigationComponent } from './components/navigation/navigation.component';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Intership';

  constructor(
    private readonly translate: TranslateService, 
  ) {}

  ngOnInit(): void {
    this.setupTranslation();
  }

  private setupTranslation() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

}

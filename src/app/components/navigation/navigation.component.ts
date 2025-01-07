import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { navigationItems } from './utils/constants/navigationItems';
import { CommonModule } from '@angular/common';
import { HomeLogoComponent } from '../home-logo/home-logo.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink, RouterLinkActive, HomeLogoComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit{
  public navList: string[] = [];

  public ngOnInit(): void {
    this.getNavItems();
  }

  private getNavItems() {
    this.navList = Object.values(navigationItems);
  }
}

import { ThemeService } from '@/services/theme.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  themeService = inject(ThemeService);

  protected onSwitch(): void {
    this.themeService.changeTheme();
  }
}

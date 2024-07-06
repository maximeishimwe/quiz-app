import { ThemeService } from '@/services/theme.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  theme = inject(ThemeService).getTheme();
}

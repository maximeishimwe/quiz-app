import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme = signal('light');

  changeTheme(): void {
    this.theme.update((value) => (value === 'light' ? 'dark' : 'light'));
  }

  getTheme(): WritableSignal<string> {
    return this.theme;
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.css',
})
export class ThemeSwitcherComponent {
  @Output() clickButton = new EventEmitter();

  protected onClick(): void {
    this.clickButton.emit();
  }
}

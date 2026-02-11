import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent {
  private themeService = inject(ThemeService);

  get isDark(): boolean {
    return this.themeService.theme() === 'dark';
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}

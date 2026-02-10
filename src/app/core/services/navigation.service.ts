import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private activeTab = signal('about');

  readonly active = this.activeTab.asReadonly();

  setActive(tab: string): void {
    this.activeTab.set(tab);
  }
}

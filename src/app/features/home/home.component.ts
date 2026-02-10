import { Component, inject } from '@angular/core';
import { IntroductionComponent } from '@shared/introduction/introduction.component';
import { AboutComponent } from '@shared/about/about.component';
import { WorkComponent } from '@shared/work/work.component';
import { ContactComponent } from '@shared/contact/contact.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { NavigationService } from '@core/services/navigation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IntroductionComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private navigationService = inject(NavigationService);

  get active() {
    return this.navigationService.active();
  }

  setActive(tab: string) {
    this.navigationService.setActive(tab);
  }
}

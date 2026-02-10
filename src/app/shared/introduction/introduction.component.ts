import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss', '../../app.component.scss']
})
export class IntroductionComponent {
  faEnvelopeOpen = faEnvelopeOpen;

  calculateDaysBetweenDays(day1: string, day2: string): number {
    const oneDay = 24 * 60 * 60 * 1000;
    const day1Date = new Date(day1);
    const day2Date = new Date(day2);
    return Math.abs(Math.floor((day2Date.getTime() - day1Date.getTime()) / oneDay));
  }

  calculateDaysBetweenMonths(month1: string, month2: string): number {
    const oneMonth = 30 * 24 * 60 * 60 * 1000;
    const month1Date = new Date(month1);
    const month2Date = new Date(month2);
    return Math.abs(Math.floor((month2Date.getTime() - month1Date.getTime()) / oneMonth));
  }

  calculateDaysBetweenYears(year1: string, year2: string): number {
    const oneYear = 365 * 24 * 60 * 60 * 1000;
    const year1Date = new Date(year1);
    const year2Date = new Date(year2);
    return Math.abs(Math.floor((year2Date.getTime() - year1Date.getTime()) / oneYear));
  }
}

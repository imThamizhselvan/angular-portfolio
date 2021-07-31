import { Component, OnInit } from '@angular/core';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss', '../app.component.scss']
})
export class IntroductionComponent implements OnInit {
  faEnvelopeOpen = faEnvelopeOpen;

  constructor() { }

  ngOnInit(): void {
    this.faEnvelopeOpen = faEnvelopeOpen;
    this.faEnvelopeOpen 
  }

  calculateDaysBetweenDays(day1, day2) {

    let oneDay = 24 * 60 * 60 * 1000;
    let day1Date = new Date(day1);
    let day2Date = new Date(day2);

    let dayDiff = Math.abs(Math.floor((day2Date.getTime() - day1Date.getTime()) / oneDay));

    return dayDiff;
  }

  calculateDaysBetweenMonths(month1, month2) {  
    let oneMonth = 30 * 24 * 60 * 60 * 1000;
    let month1Date = new Date(month1);
    let month2Date = new Date(month2);

    let monthDiff = Math.abs(Math.floor((month2Date.getTime() - month1Date.getTime()) / oneMonth));

    return monthDiff;
  }

  calculateDaysBetweenYears(year1, year2) {
    let oneYear = 365 * 24 * 60 * 60 * 1000;
    let year1Date = new Date(year1);
    let year2Date = new Date(year2);

    let yearDiff = Math.abs(Math.floor((year2Date.getTime() - year1Date.getTime()) / oneYear));

    return yearDiff;
  }

  // getTweetsFromUser
  getTweetsFromUser() {
    
  }


  
  
  

}

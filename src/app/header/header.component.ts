import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent implements OnInit {
  public active = 'about';

  constructor() { }

  ngOnInit(): void {
  }

  setActive(tab) {
    this.active = tab;
  }
}

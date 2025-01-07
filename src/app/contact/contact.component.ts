import { Component, OnInit } from '@angular/core';
import { faPhone, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../app.component.scss']
})
export class ContactComponent implements OnInit {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faFileAlt = faFileAlt;

  constructor() { }

  ngOnInit(): void {
  }

}

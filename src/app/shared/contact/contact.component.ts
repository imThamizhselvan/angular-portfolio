import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../../app.component.scss']
})
export class ContactComponent {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faFileAlt = faFileAlt;
}

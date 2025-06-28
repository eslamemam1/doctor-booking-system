import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Doctor-Appointment-Booking-System';
  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'en'; // 🔹 Default to English
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en'); // 🔹 Set default to English
    translate.use(savedLang); // 🔹 Use saved or default
  }
}

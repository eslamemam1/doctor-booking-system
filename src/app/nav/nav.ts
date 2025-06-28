import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  constructor(public translate: TranslateService) {}
  menuOpen = false;

  togoleLang() {
    const currentLang = this.translate.currentLang || 'en'; // fallback if null
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(newLang);
    localStorage.setItem('lang', newLang); // ✅ Save for future reloads
    console.log(`Language changed to: ${newLang}`);
  }
}

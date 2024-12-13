// nav-bar.component.ts
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { faLanguage, faFlag as faFlagSolid } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, DropdownModule, FormsModule, FontAwesomeModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  translate = inject(TranslateService);
  faLanguage = faLanguage;
  faUsFlag = faFlagSolid;
  faFlag = faFlag;

  selectedLanguage: string = 'en';
  languages = [
    {
      name: 'English',
      code: 'en',
      flag: this.faUsFlag,
      nativeName: 'English',
      isDefault: true
    },
    {
      name: 'Português',
      code: 'pt',
      flag: faFlagSolid,
      nativeName: 'Portuguese',
      isDefault: false
    }
  ];

  constructor() {
    this.translate.setDefaultLang('en');
    this.translate.use(this.selectedLanguage);
  }

  changeLanguage() {
    this.translate.use(this.selectedLanguage);
  }

  getLanguageIcon(code: string) {
    return this.languages.find(lang => lang.code === code)?.flag || this.faLanguage;
  }
}

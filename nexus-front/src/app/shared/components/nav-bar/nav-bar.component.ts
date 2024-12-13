// nav-bar.component.ts
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CommonModule} from '@angular/common';



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

  selectedLanguage: string = 'en';
  languages: any[] = [
    { name: 'English', code: 'en' },
    { name: 'Português', code: 'pt' }
  ];

  constructor() {
    this.translate.setDefaultLang('en'); // Define o idioma padrão
    this.translate.use(this.selectedLanguage); // Define o idioma inicial
  }

  changeLanguage() {
    this.translate.use(this.selectedLanguage);
  }
}

// nav-bar.component.ts
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CommonModule, NgOptimizedImage} from '@angular/common';

interface NavItem {
  label: string;
  path: string;
}

interface SocialLink {
  icon: string;
  url: string;
}

interface FooterLink {
  label: string;
  path?: string;
  url?: string;
}

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLinkActive, RouterLink, FormsModule, FontAwesomeModule, CommonModule, NgOptimizedImage],
  templateUrl: './nav-bar.component.html',
  standalone: true,
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  translate = inject(TranslateService);


  constructor() {
    this.translate.setDefaultLang('en');
  }


  navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'Metrics', path: '/metrics' },
    { label: 'ROI', path: '/roi' }
  ];

  socialLinks: SocialLink[] = [
    { icon: 'fab fa-twitter', url: '#' },
    { icon: 'fab fa-linkedin-in', url: '#' },
    { icon: 'fab fa-github', url: '#' }
  ];

  quickLinks: FooterLink[] = [
    { label: 'Features', path: '/features' },
    { label: 'Metrics', path: '/metrics' },
    { label: 'ROI Analysis', path: '/roi' },
    { label: 'Blog', path: '/blog' }
  ];

  companyLinks: FooterLink[] = [
    { label: 'About Us', url: '#' },
    { label: 'Contact Us', url: '#' },
    { label: 'Privacy Policy', url: '#' },
    { label: 'Terms of Service', url: '#' }
  ];
}

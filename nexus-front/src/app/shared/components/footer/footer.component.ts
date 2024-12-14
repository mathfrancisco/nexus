import {Component} from '@angular/core';

import { RouterLink} from '@angular/router';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';

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
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})


export class FooterComponent {
  currentYear = new Date().getFullYear();


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

// features/home/home.component.ts
import { Component, signal } from '@angular/core';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  platforms = signal([
    { name: 'YouTube', icon: 'fa-brands fa-youtube', metrics: '1M+ Analytics' }, // Adicionado icon
    { name: 'Instagram', icon: 'fa-brands fa-instagram', metrics: '500K+ Posts' }, // Adicionado icon
    { name: 'TikTok', icon: 'fa-brands fa-tiktok', metrics: '2M+ Videos' }, // Adicionado icon
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin', metrics: '300K+ Profiles' } // Adicionado icon
  ]);

  features = signal([
    {
      title: 'Real-time Tracking',
      description: 'Monitor your social media performance across all platforms in real-time',
      icon: 'fa-solid fa-chart-line' // Adicionado icon
    },
    {
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations to improve your social media strategy',
      icon: 'fa-solid fa-brain' // Adicionado icon
    },
    {
      title: 'ROI Analytics',
      description: 'Track and optimize your social media investment returns',
      icon: 'fa-solid fa-chart-pie' // Adicionado icon
    }
  ]);
}


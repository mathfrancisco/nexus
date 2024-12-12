// features/home/home.component.ts
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html'
})
export class HomeComponent {
  platforms = signal([
    { name: 'YouTube', icon: 'youtube', metrics: '1M+ Analytics' },
    { name: 'Instagram', icon: 'instagram', metrics: '500K+ Posts' },
    { name: 'TikTok', icon: 'tiktok', metrics: '2M+ Videos' },
    { name: 'LinkedIn', icon: 'linkedin', metrics: '300K+ Profiles' }
  ]);

  features = signal([
    {
      title: 'Real-time Tracking',
      description: 'Monitor your social media performance across all platforms in real-time',
      icon: 'chart-line'
    },
    {
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations to improve your social media strategy',
      icon: 'brain'
    },
    {
      title: 'ROI Analytics',
      description: 'Track and optimize your social media investment returns',
      icon: 'chart-pie'
    }
  ]);
}


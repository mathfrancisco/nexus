// features/home/home.component.ts
import { Component, signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faChartLine, faBrain, faChartPie, faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram, faTiktok, faLinkedin } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faTiktok = faTiktok;
  faLinkedin = faLinkedin;
  faChartLine = faChartLine;
  faBrain = faBrain;
  faChartPie = faChartPie;



  platforms = signal([
    { name: 'YouTube', icon: faYoutube, metrics: '1M+ Analytics' },
    { name: 'Instagram', icon: faInstagram, metrics: '500K+ Posts' },
    { name: 'TikTok', icon: faTiktok, metrics: '2M+ Videos' },
    { name: 'LinkedIn', icon: faLinkedin, metrics: '300K+ Profiles' }
  ]);

  features = signal([
    {
      title: 'Real-time Tracking',
      description: 'Monitor your social media performance across all platforms in real-time',
      icon: faChartLine
    },
    {
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations to improve your social media strategy',
      icon: faBrain
    },
    {
      title: 'ROI Analytics',
      description: 'Track and optimize your social media investment returns',
      icon: faChartPie
    }
  ]);
  // Adicione isso junto com os outros signals
  platformStats = signal([
    {
      platform: 'YouTube',
      stats: [
        { label: 'Subscribers', value: '127.5K', growth: '+12%' },
        { label: 'Views', value: '1.2M', growth: '+24%' },
        { label: 'Engagement', value: '8.7%', growth: '+5%' }
      ]
    },
    {
      platform: 'Instagram',
      stats: [
        { label: 'Followers', value: '85.2K', growth: '+15%' },
        { label: 'Impressions', value: '750K', growth: '+18%' },
        { label: 'Engagement', value: '4.2%', growth: '+7%' }
      ]
    },
    {
      platform: 'TikTok',
      stats: [
        { label: 'Followers', value: '234.8K', growth: '+45%' },
        { label: 'Views', value: '2.8M', growth: '+65%' },
        { label: 'Engagement', value: '12.4%', growth: '+22%' }
      ]
    },
    {
      platform: 'LinkedIn',
      stats: [
        { label: 'Connections', value: '42.3K', growth: '+8%' },
        { label: 'Impressions', value: '320K', growth: '+14%' },
        { label: 'Engagement', value: '3.8%', growth: '+4%' }
      ]
    }
  ]);
  getPlatformIcon(platform: string) {
    switch (platform) {
      case 'YouTube':
        return this.faYoutube;
      case 'Instagram':
        return this.faInstagram;
      case 'TikTok':
        return this.faTiktok;
      case 'LinkedIn':
        return this.faLinkedin;
      default:
        return this.faChartLine;
    }
  }
  protected readonly faArrowDown = faArrowDown;
  protected readonly faArrowUp = faArrowUp;
}


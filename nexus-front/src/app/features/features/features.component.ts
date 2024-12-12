// features/features/features.component.ts
import { Component, OnInit, signal, inject } from '@angular/core'; 
import { FeatureService } from '../../core/services/feature.service';
import { Feature } from '../../core/models/feature.model';

@Component({
  selector: 'app-features',
  standalone: true,
  templateUrl: './features.component.html'
})
export class FeaturesComponent implements OnInit { // Implemente OnInit
    private featureService = inject(FeatureService);

    features = signal<Feature[]>([]); // Inicialize como um array vazio

    ngOnInit() { // Adicione ngOnInit
        this.loadFeatures();
    }

  features = signal<Feature[]>([
    {
      id: '1',
      title: 'Real-time Analytics',
      description: 'Track performance metrics across all platforms in real-time.',
      icon: 'chart-line', // Classe do ícone (ex: de uma biblioteca de ícones)
      capabilities: [
        'Live engagement tracking',
        'Real-time notifications',
        'Instant performance updates'
      ],
      benefits: [
        'Never miss important trends',
        'React quickly to viral content',
        'Optimize posting times'
      ]
    },
    {
      id: '2',
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports on your performance with just a few clicks.',
      icon: 'document-report', // Classe do ícone
      capabilities: [
        'Customizable report templates',
        'Scheduled reporting',
        'Data export options'
      ],
      benefits: [
        'Save time and effort',
        'Gain deeper insights into your data',
        'Share reports easily with your team'
      ]
    },
    {
      id: '3',
      title: 'Competitor Analysis',
      description: 'Benchmark your performance against your competitors and identify areas for improvement.',
      icon: 'users-group', // Classe do ícone
      capabilities: [
        'Competitor performance tracking',
        'Trend analysis',
        'Audience overlap insights'
      ],
      benefits: [
        'Stay ahead of the competition',
        'Understand your market position',
        'Make data-driven decisions'
      ]
    },
    {
      id: '4',
      title: 'Content Scheduling',
      description: 'Plan and schedule your content across multiple platforms in advance.',
      icon: 'calendar-days', // Classe do ícone
      capabilities: [
        'Bulk content upload',
        'Customizable posting schedules',
        'Post preview and approval'
      ],
      benefits: [
        'Maintain a consistent online presence',
        'Free up time for other tasks',
        'Optimize content for maximum impact'
      ]
    }
  ]);
  trackByFeatureId(index: number, feature: Feature): string {
    return feature.id;
  }

  trackByCapability(index: number, capability: string): string {
    return capability;
  }


  trackByBenefit(index: number, benefit: string): string {
    return benefit;
  }
}

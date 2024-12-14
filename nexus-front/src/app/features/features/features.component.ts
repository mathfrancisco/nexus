import { Component, OnInit, signal, inject } from '@angular/core';
import { FeatureService } from '../../core/services/feature.service';
import { Feature } from '../../core/models/feature.model';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-features',
    imports: [CommonModule],
    templateUrl: './features.component.html'
})
export class FeaturesComponent implements OnInit {
  private featureService = inject(FeatureService);

  features = signal<Feature[]>([]);

  ngOnInit() {
    this.loadFeatures();
  }

  async loadFeatures() {
    const mockFeatures: Feature[] = [
      {
        id: '1',
        title: 'Real-time Analytics',
        description: 'Track performance metrics across all platforms in real-time.',
        icon: 'chart-line',
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
        icon: 'document-report',
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
        icon: 'users-group',
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
        icon: 'calendar-days',
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
    ];

    try {
      const data = await this.featureService.getFeatures().toPromise();
      this.features.set(data ?? mockFeatures);
    } catch (error) {
      console.error("Erro ao carregar features:", error);
      this.features.set(mockFeatures);
    }
  }

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

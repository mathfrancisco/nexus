// features/features/features.component.ts
import { Component, signal, inject } from '@angular/core';
import { FeatureService } from '../../core/services/feature.service';
import { Feature } from '../../core/models/feature.model';

@Component({
  selector: 'app-features',
  standalone: true,
  templateUrl: './features.component.html'
})
export class FeaturesComponent {
  private featureService = inject(FeatureService);

  features = signal<Feature[]>([
    {
      id: '1',
      title: 'Real-time Analytics',
      description: 'Track performance metrics across all platforms in real-time',
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
    // More features...
  ]);
}

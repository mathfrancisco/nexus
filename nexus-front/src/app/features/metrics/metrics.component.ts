// features/metrics/metrics.component.ts
import { Component, signal, inject, OnInit } from '@angular/core';
import { AnalyticsService } from '../../core/services/analytics.service';
import { PlatformMetrics } from '../../core/models/platform-metrics.model';
import {LoadingSpinnerComponent} from '../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [
    LoadingSpinnerComponent
  ],
  templateUrl: './metrics.component.html'
})
export class MetricsComponent implements OnInit {
  private analyticsService = inject(AnalyticsService);

  selectedPlatform = signal('YOUTUBE');
  metrics = signal<PlatformMetrics | null>(null);
  loading = signal(false);

  ngOnInit() {
    this.loadMetrics();
  }

  async loadMetrics() {
    this.loading.set(true);
    try {
      const data = await this.analyticsService
        .getPlatformMetrics(this.selectedPlatform())
        .toPromise();
      this.metrics.set(data);
    } finally {
      this.loading.set(false);
    }
  }

  changePlatform(platform: string) {
    this.selectedPlatform.set(platform);
    this.loadMetrics();
  }
}

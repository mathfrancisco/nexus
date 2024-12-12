// features/metrics/metrics.component.ts
import { Component, signal, inject, OnInit } from '@angular/core';
import { AnalyticsService } from '../../core/services/analytics.service';
import {Demographics, PlatformMetrics} from '../../core/models/platform-metrics.model';
import {LoadingSpinnerComponent} from '../../shared/components/loading-spinner/loading-spinner.component';
import {MetricFormatterPipe} from '../../shared/pipes/metric-formatter.pipe';
import { take } from 'rxjs/operators'; // Importe o operador take
import { Chart } from 'chart.js';


@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [
    LoadingSpinnerComponent,
    MetricFormatterPipe
  ],
  templateUrl: './metrics.component.html'
})


export class MetricsComponent implements OnInit {

  private analyticsService = inject(AnalyticsService);

  selectedPlatform = signal('YOUTUBE');
  metrics = signal<PlatformMetrics>({
    platform: '',
    followers: 0,
    engagementRate: 0,
    interactions: 0,
    dailyMetrics: [],
    demographics: [],
    growth: { daily: 0, weekly: 0, monthly: 0 }
  });
  loading = signal(false);

  chart: Chart | undefined;

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    // ... (código do createChart)
  }

  ngOnInit() {
    this.loadMetrics();
  }


async loadMetrics() {
    this.loading.set(true);
    try {
        const data = await this.analyticsService.getPlatformMetrics(this.selectedPlatform()).pipe(take(1)).toPromise();
        this.metrics.set(data ?? this.metrics()); // Use o valor atual se data for null/undefined
    } catch (error) {
        console.error("Erro ao carregar métricas:", error);
        // Lide com o erro, ex: exiba uma mensagem de erro ao usuário
    } finally {
        this.loading.set(false);
    }
    this.createChart();
}


  changePlatform(platform: string) {
    this.selectedPlatform.set(platform);
    this.loadMetrics();
  }
  trackByPlatformName(index: number, platform: string): string {
    return platform;
  }

  trackByDemographicAgeRange(index: number, demographic: Demographics): string {
    return demographic.ageRange;
  }
}

// features/metrics/metrics.component.ts
import { Component, signal, inject, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AnalyticsService } from '../../core/services/analytics.service';
import { Demographics, PlatformMetrics } from '../../core/models/platform-metrics.model';
import { LoadingSpinnerComponent } from '../../shared/components/loading-spinner/loading-spinner.component';
import { MetricFormatterPipe } from '../../shared/pipes/metric-formatter.pipe';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Chart, ChartConfiguration } from 'chart.js';
import { Subject } from 'rxjs';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [
    LoadingSpinnerComponent,
    MetricFormatterPipe,
    CommonModule
  ],
  templateUrl: './metrics.component.html'
})
export class MetricsComponent implements OnInit, AfterViewInit, OnDestroy {

  private analyticsService = inject(AnalyticsService);
  private destroyed$ = new Subject<void>();

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

  ngOnInit() {
    this.loadMetrics();
  }

  ngAfterViewInit() {
    this.createChart();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  async loadMetrics() {
    this.loading.set(true);
    try {
      const data = await this.analyticsService.getPlatformMetrics(this.selectedPlatform())
        .pipe(takeUntilDestroyed())
        .toPromise();
      this.metrics.set(data ?? this.metrics());
    } catch (error) {
      console.error("Erro ao carregar métricas:", error);
      // Lide com o erro, ex: exiba uma mensagem de erro ao usuário
    } finally {
      this.loading.set(false);
    }
    this.createChart();
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy(); // Destrói o gráfico anterior, se existir
    }

    const dailyMetrics = this.metrics()?.dailyMetrics || [];

    const chartConfig: ChartConfiguration<'line'> = {
      type: 'line',
      data: {
        labels: dailyMetrics.map(metric => metric.date),
        datasets: [{
          label: 'Daily Metrics',
          data: dailyMetrics.map(metric => metric.value),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        }
      }
    };

    this.chart = new Chart('dailyMetricsChart', chartConfig);
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

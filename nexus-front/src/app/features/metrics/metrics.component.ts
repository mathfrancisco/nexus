// features/metrics/metrics.component.ts
import { Component, signal, inject, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AnalyticsService } from '../../core/services/analytics.service';
import { Demographics, PlatformMetrics } from '../../core/models/platform-metrics.model';
import { LoadingSpinnerComponent } from '../../shared/components/loading-spinner/loading-spinner.component';
import { MetricFormatterPipe } from '../../shared/pipes/metric-formatter.pipe';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Chart, ChartConfiguration, ChartOptions } from 'chart.js/auto';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [
    LoadingSpinnerComponent,
    MetricFormatterPipe,
    CommonModule,
    FormsModule
  ],
  templateUrl: './metrics.component.html'
})
export class MetricsComponent implements OnInit, AfterViewInit, OnDestroy {
  private analyticsService = inject(AnalyticsService);
  private destroyed$ = new Subject<void>();

  // Signals
  selectedPlatform = signal('YOUTUBE');
  selectedTimeframe = signal<'day' | 'week' | 'month'>('week');
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

  // Charts
  metricsChart: Chart | undefined;
  demographicsChart: Chart | undefined;

  // Platform options
  platforms = ['YOUTUBE', 'INSTAGRAM', 'TIKTOK', 'LINKEDIN'];

  ngOnInit() {
    this.loadMetrics();
  }

  ngAfterViewInit() {
    this.initializeCharts();
  }

  ngOnDestroy(): void {
    if (this.metricsChart) {
      this.metricsChart.destroy();
    }
    if (this.demographicsChart) {
      this.demographicsChart.destroy();
    }
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
      this.updateCharts();
    } catch (error) {
      console.error("Erro ao carregar métricas:", error);
      // TODO: Implementar tratamento de erro adequado
    } finally {
      this.loading.set(false);
    }
  }

  private initializeCharts() {
    this.initializeMetricsChart();
    this.initializeDemographicsChart();
  }

  private initializeMetricsChart() {
    const ctx = document.getElementById('dailyMetricsChart') as HTMLCanvasElement;
    if (!ctx) return;

    this.metricsChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Engagement',
          data: [],
          borderColor: 'rgb(99, 102, 241)',
          backgroundColor: 'rgba(99, 102, 241, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: this.getMetricsChartOptions()
    });
  }

  private initializeDemographicsChart() {
    const ctx = document.getElementById('demographicsChart') as HTMLCanvasElement;
    if (!ctx) return;

    this.demographicsChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: [
            'rgba(99, 102, 241, 0.8)',
            'rgba(167, 139, 250, 0.8)',
            'rgba(217, 70, 239, 0.8)',
            'rgba(236, 72, 153, 0.8)'
          ]
        }]
      },
      options: this.getDemographicsChartOptions()
    });
  }

  private updateCharts() {
    this.updateMetricsChart();
    this.updateDemographicsChart();
  }

  private updateMetricsChart() {
    if (!this.metricsChart) return;

    const filteredMetrics = this.filterMetricsByTimeframe(this.metrics().dailyMetrics);
    
    this.metricsChart.data.labels = filteredMetrics.map(metric => 
      new Date(metric.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    );
    this.metricsChart.data.datasets[0].data = filteredMetrics.map(metric => metric.value);
    this.metricsChart.update();
  }

  private updateDemographicsChart() {
    if (!this.demographicsChart) return;

    const demographics = this.metrics().demographics;
    this.demographicsChart.data.labels = demographics.map(d => d.ageRange);
    this.demographicsChart.data.datasets[0].data = demographics.map(d => d.percentage);
    this.demographicsChart.update();
  }

  private filterMetricsByTimeframe(metrics: Array<{ date: string; value: number }>) {
    const now = new Date();
    const timeframeDays = {
      day: 1,
      week: 7,
      month: 30
    };

    const cutoffDate = new Date(now.setDate(now.getDate() - timeframeDays[this.selectedTimeframe()]));
    return metrics.filter(metric => new Date(metric.date) >= cutoffDate);
  }

  private getMetricsChartOptions(): ChartOptions {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: (context) => {
              return `Engagement: ${context.parsed.y.toLocaleString()}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        }
      },
      interaction: {
        intersect: false,
        mode: 'index'
      }
    };
  }

  private getDemographicsChartOptions(): ChartOptions {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            usePointStyle: true,
            padding: 20
          }
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              return `${context.label}: ${context.parsed}%`;
            }
          }
        }
      }
    };
  }

  // Event Handlers
  changePlatform(platform: string) {
    this.selectedPlatform.set(platform);
    this.loadMetrics();
  }

  changeTimeframe(timeframe: 'day' | 'week' | 'month') {
    this.selectedTimeframe.set(timeframe);
    this.updateMetricsChart();
  }

  // Track By Functions
  trackByPlatformName(index: number, platform: string): string {
    return platform;
  }

  trackByDemographicAgeRange(index: number, demographic: Demographics): string {
    return demographic.ageRange;
  }
}

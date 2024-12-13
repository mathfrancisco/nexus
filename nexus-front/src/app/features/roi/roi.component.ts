// features/roi/roi.component.ts
import { Component, signal, DestroyRef, inject, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { RoiService } from '../../core/services/roi.service';
import { PlatformRoi, RoiData } from '../../core/models/roi-data.model';
import { LoadingSpinnerComponent } from '../../shared/components/loading-spinner/loading-spinner.component';
import { MetricFormatterPipe } from '../../shared/pipes/metric-formatter.pipe';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, ChartOptions } from 'chart.js/auto';
type Period = 'week' | 'month' | 'year';

@Component({
  selector: 'app-roi',
  standalone: true,
  imports: [
    LoadingSpinnerComponent,
    MetricFormatterPipe,
    CommonModule
  ],
  templateUrl: './roi.component.html'
})
export class RoiComponent implements OnInit, OnDestroy, AfterViewInit {
  private roiService = inject(RoiService);
  private destroyed$ = new Subject<void>();
  private destroyRef = inject(DestroyRef);
  periods: Period[] = ['week', 'month', 'year'];

  roiData = signal<RoiData>({
    totalInvestment: 0,
    totalRevenue: 0,
    roiPercentage: 0,
    platforms: [],
    historicalData: []
  });
  loading = signal(false);
  selectedPeriod = signal<'week' | 'month' | 'year'>('month');
  private chart: Chart | undefined;

  ngOnInit() {
    this.loadRoiData();
  }

  ngAfterViewInit() {
    this.initializeChart();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  async loadRoiData() {
    this.loading.set(true);

    try {
      const data = await this.roiService.getRoiAnalysis()
        .pipe(takeUntilDestroyed(this.destroyRef))
        .toPromise();
      this.roiData.set(data ?? this.roiData());
      this.updateChart();
    } catch (error) {
      console.error("Erro ao carregar dados de ROI:", error);
    } finally {
      this.loading.set(false);
    }
  }

  changePeriod(period: 'week' | 'month' | 'year') {
    this.selectedPeriod.set(period);
    this.updateChart();
  }

  private initializeChart() {
    const ctx = document.getElementById('historicalChart') as HTMLCanvasElement;
    if (!ctx) return;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'ROI History',
          data: [],
          borderColor: 'rgb(99, 102, 241)',
          backgroundColor: 'rgba(99, 102, 241, 0.1)',
          fill: true,
          tension: 0.4,
        }]
      },
      options: this.getChartOptions()
    });

    this.updateChart();
  }

  private updateChart() {
    if (!this.chart || !this.roiData().historicalData.length) return;

    const filteredData = this.filterDataByPeriod(this.roiData().historicalData);

    this.chart.data.labels = filteredData.map(item =>
      new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    );
    this.chart.data.datasets[0].data = filteredData.map(item => item.value);
    this.chart.update();
  }

  private filterDataByPeriod(data: { date: string; value: number }[]) {
    const now = new Date();
    const periodInDays = {
      week: 7,
      month: 30,
      year: 365
    };

    const cutoffDate = new Date(now.setDate(now.getDate() - periodInDays[this.selectedPeriod()]));

    return data.filter(item => new Date(item.date) >= cutoffDate);
  }

  private getChartOptions(): ChartOptions {
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
              return `ROI: ${context.parsed.y.toFixed(2)}%`;
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
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          },
          ticks: {
            callback: (value) => `${value}%`
          }
        }
      },
      interaction: {
        intersect: false,
        mode: 'index'
      }
    };
  }

  trackByPlatformName(index: number, platform: PlatformRoi): string {
    return platform.name;
  }
}

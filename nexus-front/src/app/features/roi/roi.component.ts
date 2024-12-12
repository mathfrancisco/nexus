// features/roi/roi.component.ts
import { Component, signal, DestroyRef, inject, OnInit, OnDestroy } from '@angular/core';
import { RoiService } from '../../core/services/roi.service';
import { PlatformRoi, RoiData } from '../../core/models/roi-data.model';
import { LoadingSpinnerComponent } from '../../shared/components/loading-spinner/loading-spinner.component';
import { MetricFormatterPipe } from '../../shared/pipes/metric-formatter.pipe';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';



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
export class RoiComponent implements OnInit, OnDestroy {
  private roiService = inject(RoiService);
  private destroyed$ = new Subject<void>();
  private destroyRef = inject(DestroyRef);

  roiData = signal<RoiData>({
    totalInvestment: 0,
    totalRevenue: 0,
    roiPercentage: 0,
    platforms: [],
    historicalData: []
  });
  loading = signal(false);

  ngOnInit() {
    this.loadRoiData();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }


  async loadRoiData() {
    this.loading.set(true);

    try {
      const data = await this.roiService.getRoiAnalysis().pipe(takeUntilDestroyed(this.destroyRef)).toPromise();
      this.roiData.set(data ?? this.roiData());
    } catch (error) {
      console.error("Erro ao carregar dados de ROI:", error);
      // Lide com o erro adequadamente, por exemplo, exibindo uma mensagem de erro ao usuário.
    } finally {
      this.loading.set(false);
    }
  }



  trackByPlatformName(index: number, platform: PlatformRoi): string {
    return platform.name;
  }
}


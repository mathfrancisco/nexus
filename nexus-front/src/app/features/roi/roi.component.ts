// features/roi/roi.component.ts
import { Component, signal, inject, OnInit } from '@angular/core';
import { RoiService } from '../../core/services/roi.service';
import {PlatformRoi, RoiData} from '../../core/models/roi-data.model';
import {LoadingSpinnerComponent} from '../../shared/components/loading-spinner/loading-spinner.component';
import {MetricFormatterPipe} from '../../shared/pipes/metric-formatter.pipe';
import {take} from 'rxjs';

@Component({
  selector: 'app-roi',
  standalone: true,
    imports: [
      LoadingSpinnerComponent,
      MetricFormatterPipe // Adicione o pipe aos imports
    ],
  templateUrl: './roi.component.html'
})
export class RoiComponent implements OnInit {
  private roiService = inject(RoiService);

  roiData = signal<RoiData | null>(null);
  loading = signal(false);

  ngOnInit() {
    this.loadRoiData();
  }

  async loadRoiData() {
    this.loading.set(true);
    try {
      const data = await this.roiService.getRoiAnalysis().pipe(take(1)).toPromise();
      this.roiData.set(data ?? null); // Define como null se data for undefined
    } finally {
      this.loading.set(false);
    }
  }
  trackByPlatformName(index: number, platform: PlatformRoi): string {
    return platform.name;
  }
}
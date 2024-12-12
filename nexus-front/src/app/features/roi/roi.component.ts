// features/roi/roi.component.ts
import { Component, signal, inject, OnInit } from '@angular/core';
import { RoiService } from '../../core/services/roi.service';
import { RoiData } from '../../core/models/roi-data.model';
import {LoadingSpinnerComponent} from '../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-roi',
  standalone: true,
  imports: [
    LoadingSpinnerComponent
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
      const data = await this.roiService.getRoiAnalysis().toPromise();
      this.roiData.set(data);
    } finally {
      this.loading.set(false);
    }
  }
}

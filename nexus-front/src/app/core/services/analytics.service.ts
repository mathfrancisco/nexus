import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlatformMetrics } from '../models/platform-metrics.model';
import { environment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private apiUrl = `${environment.apiUrl}/api/v1/metrics`;

  constructor(private http: HttpClient) {}

  getPlatformMetrics(platform: string): Observable<PlatformMetrics> {
    return this.http.get<PlatformMetrics>(`${this.apiUrl}/${platform}`);
  }

  getAllPlatformsMetrics(): Observable<PlatformMetrics[]> {
    return this.http.get<PlatformMetrics[]>(`${this.apiUrl}/all`);
  }
}

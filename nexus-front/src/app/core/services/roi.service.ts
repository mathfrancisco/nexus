import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoiData } from '../models/roi-data.model';
import { environment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class RoiService {
  private apiUrl = `${environment.apiUrl}/api/v1/roi`;

  constructor(private http: HttpClient) {}

 getRoiAnalysis(): Observable<RoiData> {
  return this.http.get<RoiData>(`${this.apiUrl}/analysis`);
}

  getPlatformRoi(platform: string): Observable<RoiData> {
    return this.http.get<RoiData>(`${this.apiUrl}/${platform}`);
  }
}

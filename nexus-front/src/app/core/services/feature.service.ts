import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feature } from '../models/feature.model';
import { environment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private apiUrl = `${environment.apiUrl}/api/v1/features`;

  constructor(private http: HttpClient) {}

  getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>(this.apiUrl);
  }
}

// app.routes.ts
import {provideRouter, Routes} from '@angular/router';
import { HomeComponent } from './features/home/home.component'; // Importe os componentes
import { MetricsComponent } from './features/metrics/metrics.component';
import { RoiComponent } from './features/roi/roi.component';
import { FeaturesComponent } from './features/features/features.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'NEXUS AI - Home'
  },
  {
    path: 'metrics',
    component: MetricsComponent,
    title: 'NEXUS AI - Analytics Metrics'
  },
  {
    path: 'roi',
    component: RoiComponent,
    title: 'NEXUS AI - ROI Analysis'
  },
  {
    path: 'features',
    component: FeaturesComponent,
    title: 'NEXUS AI - Features'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];



import {ApplicationConfig} from '@angular/core'; // Importe as rotas

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Use as rotas importadas
    // ... outros providers
  ]
};

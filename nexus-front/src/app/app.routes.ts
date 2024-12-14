import { provideRouter, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent),
    title: 'NEXUS AI - Home'
  },
  {
    path: 'metrics',
    loadComponent: () => import('./features/metrics/metrics.component').then(c => c.MetricsComponent),
    title: 'NEXUS AI - Analytics Metrics'
  },
  {
    path: 'roi',
    loadComponent: () => import('./features/roi/roi.component').then(c => c.RoiComponent),
    title: 'NEXUS AI - ROI Analysis'
  },
  {
    path: 'features',
    loadComponent: () => import('./features/features/features.component').then(c => c.FeaturesComponent),
    title: 'NEXUS AI - Features'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

import { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};


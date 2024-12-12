import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metricFormatter',
  standalone: true
})
export class MetricFormatterPipe implements PipeTransform {
  transform(value: number, format: 'number' | 'percentage' | 'currency' = 'number'): string {
    if (value === null || value === undefined) {
      return '-';
    }

    switch (format) {
      case 'number':
        return this.formatNumber(value);
      case 'percentage':
        return this.formatPercentage(value);
      case 'currency':
        return this.formatCurrency(value);
      default:
        return value.toString();
    }
  }

  private formatNumber(value: number): string {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    }
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K';
    }
    return value.toString();
  }

  private formatPercentage(value: number): string {
    return value.toFixed(1) + '%';
  }

  private formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  }
}

import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-loading-spinner',
    imports: [CommonModule],
    templateUrl: './loading-spinner.component.html',
    styleUrl: './loading-spinner.component.css'
})
export class LoadingSpinnerComponent {
  @Input() message?: string;
  @Input() size: 'normal' | 'large' = 'normal';
  @Input() fullHeight = false;
}

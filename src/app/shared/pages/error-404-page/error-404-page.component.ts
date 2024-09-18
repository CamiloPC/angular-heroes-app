import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-error-404-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './error-404-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class Error404PageComponent { }

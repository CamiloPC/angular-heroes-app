import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>shared works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SharedComponent { }

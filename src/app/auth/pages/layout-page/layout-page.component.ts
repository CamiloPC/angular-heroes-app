import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialComponent } from '../../../material/material.component';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialComponent
  ],
  templateUrl: './layout-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class LayoutPageComponent { }

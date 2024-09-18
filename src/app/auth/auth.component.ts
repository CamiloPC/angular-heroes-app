import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialComponent } from '../material/material.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    MaterialComponent
  ],
  templateUrl: './auth.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class AuthComponent { }

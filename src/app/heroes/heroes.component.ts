import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './heroes.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class HeroesComponent { }

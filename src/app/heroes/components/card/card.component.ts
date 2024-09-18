import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { MatCardModule } from '@angular/material/card';
import { MatChip, MatChipListbox } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HeroImagePipe } from '../../pipes/hero-image.pipe';

@Component({
  selector: 'heroes-hero-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipListbox,
    MatChip,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    HeroImagePipe
  ],
  templateUrl: './card.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class CardComponent implements OnInit {

  @Input()
  public hero!: Hero;


  ngOnInit(): void {
    if( !this.hero ){
      throw Error ('Hero property is required');
    }
  }
 }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { HeroImagePipe } from '../../pipes/hero-image.pipe';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [
    CommonModule,

    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,

    HeroImagePipe,
  ],
  templateUrl: './hero-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class HeroPageComponent implements OnInit{

  public hero?: Hero;

  constructor (
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(1000),
        switchMap( ({ id }) => this.heroesService.getHeroById(id) )
      )
        .subscribe( hero => {
          if( !hero ) return this.router.navigate([ '/heroes/list' ])

          this.hero = hero;
          return
        } );
  }

  goBack() {
    this.router.navigateByUrl('heroes/list');
  }
 }

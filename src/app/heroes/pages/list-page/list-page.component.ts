import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatDividerModule } from '@angular/material/divider';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    CardComponent
],
  templateUrl: './list-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ListPageComponent implements OnInit {

  public heroes: Hero[] = [];

  constructor ( private heroesService: HeroesService ) {}
  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe( heroes => this.heroes = heroes );
  }
 }
